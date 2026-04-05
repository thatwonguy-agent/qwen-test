export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">QwenTest</h1>
          <div className="space-x-4">
            <a href="/demo" className="text-white hover:text-blue-200">Demo</a>
            <a href="/docs" className="text-white hover:text-blue-200">Docs</a>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-16 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Secure Agent Platform</h2>
        <p className="text-xl mb-8 opacity-90">Demonstrating secure development practices with a full-stack application</p>
        <div className="space-x-4">
          <a href="/demo" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50">See Demo</a>
        </div>
      </main>
    </div>
  )
}
