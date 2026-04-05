import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import { PublicNav } from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Demo from './pages/Demo'
import Docs from './pages/Docs'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<><PublicNav /><Home /></>} />
        <Route path="/demo" element={<><PublicNav /><Demo /></>} />
        <Route path="/docs" element={<><PublicNav /><Docs /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
