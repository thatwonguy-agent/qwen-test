# QwenTest - Secure Agent Platform

QwenTest is a secure, containerized demonstration platform built for modern deployment pipelines.

## Quick Start

### Local Development

```bash
# Clone and setup
git clone https://github.com/thatwonguy-agent/qwen-test
cd qwen-test

# Start all services
docker-compose up -d

# Access the app
# Frontend: http://localhost:3000
# Backend API: Available at /api endpoints
```

### Production Deployment

```bash
# Build and run
docker-compose up -d

# Or deploy separately
cd frontend && npm run build
docker build -t qwen-test-frontend .
docker build -t qwen-test-backend .
```

## Features

- **Real-Time Collaboration**: Instant sync across team members
- **Project Organization**: Flexible board and list views
- **Enterprise-Grade Security**: Industry-standard encryption and auth
- **Cloud-Native**: Deploy anywhere with Docker support
- **Developer-Friendly**: REST API for integrations
- **Responsive Interface**: Works on any device

## Technology Foundation

Built with modern, proven technologies:
- **Frontend**: React ecosystem with build tools
- **Backend**: Node.js runtime with API framework
- **Database**: Relational storage with connection pooling
- **Security**: Token-based auth, encrypted passwords
- **Deployment**: Container orchestration for consistency

## Security

- No secrets in source control
- Environment-based configuration
- Encrypted communications
- Input validation at all boundaries

## CI/CD Pipeline

All pushes to `main` trigger:
1. Spec validation
2. Security scan
3. Build and lint
4. Unit tests
5. Docker build
6. GitHub Pages deployment (frontend)

## License

MIT

---

*Built with security and scalability in mind*
