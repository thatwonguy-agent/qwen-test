const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pg = require('pg')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

const PORT = parseInt(process.env.PORT || '8080', 10)
const JWT_SECRET = process.env.JWT_SECRET || process.env.SECRET_KEY || 'fallback-secret-use-env-var-in-production'
const DATABASE_URL = process.env.DATABASE_URL || process.env.DATABASEConnectionString || process.env.POSTGRES_CONNECTION_STRING || 'postgresql://postgres:postgres@localhost:5432/appdb'

const { Pool } = pg
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

app.use(cors())
app.use(express.json())

// Middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Access denied' })
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' })
    req.user = user
    next()
  })
}

// Initialize database
async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        owner_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES projects(id),
        title VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'todo',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
  } catch (err) {
    console.error('Database initialization error:', err)
  }
}

// Auth Routes
app.post('/auth/register', async (req, res) => {
  const { email, password } = req.body
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    )
    
    const userId = result.rows[0].id
    
    const projectResult = await pool.query(
      'INSERT INTO projects (name, owner_id) VALUES ($1, $2) RETURNING id',
      ['My Project', userId]
    )
    
    const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' })
    
    res.json({ 
      message: 'User created successfully', 
      token, 
      projectId: projectResult.rows[0].id,
      userId 
    })
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ message: 'Email already exists' })
    } else {
      res.status(500).json({ message: 'Server error' })
    }
  }
})

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    
    const user = result.rows[0]
    const validPassword = await bcrypt.compare(password, user.password)
    
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    
    const projectResult = await pool.query(
      'SELECT id FROM projects WHERE owner_id = $1 ORDER BY created_at DESC LIMIT 1',
      [user.id]
    )
    
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })
    
    res.json({ 
      message: 'Login successful', 
      token,
      projectId: projectResult.rows[0]?.id || null,
      userId: user.id 
    })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Project Routes
app.get('/projects', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM projects WHERE owner_id = $1 ORDER BY created_at DESC',
      [req.user.userId]
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

app.post('/projects', authenticateToken, async (req, res) => {
  const { name } = req.body
  
  try {
    const result = await pool.query(
      'INSERT INTO projects (name, owner_id) VALUES ($1, $2) RETURNING *',
      [name, req.user.userId]
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Task Routes
app.get('/projects/:projectId/tasks', authenticateToken, async (req, res) => {
  const { projectId } = req.params
  
  try {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE project_id = $1 ORDER BY created_at DESC',
      [projectId]
    )
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

app.post('/projects/:projectId/tasks', authenticateToken, async (req, res) => {
  const { projectId } = req.params
  const { title } = req.body
  
  try {
    const result = await pool.query(
      'INSERT INTO tasks (project_id, title) VALUES ($1, $2) RETURNING *',
      [projectId, title]
    )
    
    const task = result.rows[0]
    io.emit('task:created', task)
    
    res.json(task)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString()
  })
})

// API health check (for CI/CD)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString()
  })
})

// Socket.IO
io.use((socket, next) => {
  const token = socket.handshake.auth.token
  if (!token) {
    return next(new Error('Authentication required'))
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return next(new Error('Invalid token'))
    socket.user = user
    next()
  })
})

io.on('connection', (socket) => {
  socket.on('disconnect', () => {})
  
  socket.on('task:update', async (data) => {
    try {
      await pool.query(
        'UPDATE tasks SET status = $1 WHERE id = $2',
        [data.status, data.taskId]
      )
      io.emit('task:updated', data)
    } catch (err) {
      console.error('Update task error:', err)
    }
  })
})

// Start server
initDB().then(() => {
  server.listen(PORT, () => {
    console.log('Application started successfully')
  })
})
