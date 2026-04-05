import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export function PublicNav() {
  const location = useLocation()
  
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">QwenTest</h1>
        <div className="space-x-4">
          <Link to="/demo" className={location.pathname === '/demo' ? 'text-blue-200' : 'text-white hover:text-blue-200'}>Demo</Link>
          <Link to="/docs" className={location.pathname === '/docs' ? 'text-blue-200' : 'text-white hover:text-blue-200'}>Docs</Link>
        </div>
      </div>
    </nav>
  )
}

export function ProtectedNav() {
  const { logout } = useAuth()
  const location = useLocation()
  
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">QwenTest</Link>
        <div className="space-x-4">
          <Link to="/" className={location.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>Home</Link>
          <Link to="/demo" className={location.pathname === '/demo' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>Demo</Link>
          <Link to="/docs" className={location.pathname === '/docs' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>Docs</Link>
          <button onClick={logout} className="text-gray-600 hover:text-blue-600">Sign Out</button>
        </div>
      </div>
    </nav>
  )
}
