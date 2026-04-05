import { PublicNav } from '../components/Nav'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
      <PublicNav />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">✨ Now with Full Authentication</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Build Smarter,<br />Scale Faster
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            The secure, containerized platform for agent-driven development. 
            JWT authentication, automated CI/CD, and production-ready deployment in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-600/30 transform hover:scale-105 transition-all duration-200"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200"
            >
              View Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-blue-200/60">Uptime SLA</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;50ms</div>
              <div className="text-blue-200/60">Response Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-blue-200/60">Automated CI/CD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
            Built from the ground up with security and scalability at its core
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">JWT Authentication</h3>
            <p className="text-blue-200/70">
              Secure token-based authentication with bcrypt password hashing and 24-hour auto-expiry.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Automated CI/CD</h3>
            <p className="text-blue-200/70">
              Multi-stage pipeline with validate-spec, security scanning, builds, linting, tests, and Docker deployment.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Containerized Deployment</h3>
            <p className="text-blue-200/70">
              Docker-ready with PostgreSQL integration, health checks, and seamless multi-environment support.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-blue-200/70 mb-8 max-w-2xl mx-auto">
            Experience the full-stack application with live authentication, protected routes, and real-time updates.
          </p>
          <button
            onClick={() => navigate('/demo')}
            className="bg-white text-blue-900 px-12 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg"
          >
            Launch Demo →
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building secure, scalable applications with our platform.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-white text-blue-600 px-12 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg transform hover:scale-105"
          >
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12 text-center text-blue-200/60">
          <p className="mb-4">
            Built with ❤️ for the developer community
          </p>
          <div className="flex justify-center gap-8">
            <a href="/docs" className="hover:text-blue-300 transition-colors">Documentation</a>
            <a href="/demo" className="hover:text-blue-300 transition-colors">Demo</a>
            <a href="https://github.com/thatwonguy-agent/qwen-test" className="hover:text-blue-300 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
