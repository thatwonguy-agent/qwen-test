import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">QwenTest</h1>
          <div className="flex items-center space-x-4">
            <span className="text-white">
              Welcome, <strong>{user?.name}</strong>
            </span>
            <button
              onClick={logout}
              className="text-white hover:text-blue-200 font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Dashboard</h2>

          <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Account</h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="text-lg text-gray-900">{user?.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="text-lg text-gray-900">{user?.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">User ID</dt>
                <dd className="text-lg text-gray-900">{user?.id}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What's Next?</h3>
            <p className="text-gray-600 mb-4">
              You've successfully signed up! This is your authenticated dashboard.
              The authentication system is now fully functional with JWT tokens and protected routes.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>JWT-based authentication with 24-hour token expiry</li>
              <li>Password hashing with bcrypt for security</li>
              <li>Protected API routes</li>
              <li>Secure token storage in localStorage</li>
              <li>User-friendly error messages</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
