import { ProtectedNav } from '../components/Nav'

export default function Docs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProtectedNav />
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
