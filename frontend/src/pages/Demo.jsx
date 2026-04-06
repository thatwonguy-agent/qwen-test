import { ProtectedNav } from '../components/Nav'

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProtectedNav />
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
