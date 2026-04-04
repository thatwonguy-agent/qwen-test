import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">QwenTest</h1>
          <div className="space-x-4">
            <Link to="/demo" className="text-white hover:text-blue-200">Demo</Link>
            <Link to="/docs" className="text-white hover:text-blue-200">Docs</Link>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-16 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Secure Agent Platform</h2>
        <p className="text-xl mb-8 opacity-90">Demonstrating secure development practices with a full-stack application</p>
        <div className="space-x-4">
          <Link to="/demo" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50">See Demo</Link>
        </div>
      </main>
    </div>
  )
}

function Demo() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">QwenTest</Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Demo Dashboard</h2>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">System Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-green-500 rounded-lg p-4">
              <p className="text-gray-700">All systems operational</p>
            </div>
            <div className="border border-blue-500 rounded-lg p-4">
              <p className="text-gray-700">Secure connections enabled</p>
            </div>
            <div className="border border-purple-500 rounded-lg p-4">
              <p className="text-gray-700">No hardcoded secrets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Architecture Overview</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`[Public Access]
        ↓
[Load Balancer / CDN]
        ↓
[Application Containers]
├── Frontend Service (static, cached)
├── API Service (dynamic, authenticated)
└── Database Service (internal only)`}
          </pre>
        </div>
      </main>
    </div>
  )
}

function Docs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">QwenTest</Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Documentation</h2>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`git clone https://github.com/thatwonguy-agent/qwen-test
cd qwen-test
docker-compose up -d`}
          </pre>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Security Features</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>JWT-based authentication</li>
            <li>Environment-based configuration</li>
            <li>No hardcoded secrets</li>
            <li>Encrypted communications</li>
            <li>Input validation at all boundaries</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  )
}

export default App
