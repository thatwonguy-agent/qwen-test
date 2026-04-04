# Architecture

## Overview

QwenTest is a secure, containerized demonstration platform. The architecture follows industry best practices for security, scalability, and maintainability.

## Technical Foundation

- **Modern JavaScript Runtime**: Latest LTS version for optimal performance
- **Component-Based Frontend**: Reactive UI with industry-standard libraries
- **RESTful API Architecture**: Clean, maintainable service layer
- **Real-Time Capabilities**: WebSocket support for live updates
- **Reliable Data Layer**: PostgreSQL with production-grade connection pooling
- **Containerized Deployment**: Docker Compose for consistent environments

## Security Architecture

### Authentication & Authorization
- JWT-based token authentication with configurable expiration
- Password hashing with industry-standard algorithms
- Role-based access control (RBAC) for resource isolation

### Data Protection
- Environment-based configuration management
- No secrets in source control
- Encrypted connections for all service communication

### Network Security
- CORS policy configuration for controlled access
- Request validation and sanitization
- Input validation at all API boundaries

## External Integrations

- **CI/CD Pipeline**: Automated testing, security scanning, and deployment
- **Notification System**: Team communication via configured channels

## Deployment Topology

The application is containerized and designed for multi-environment deployment:

```
[Public Access]
        ↓
[Load Balancer / CDN]
        ↓
[Application Containers]
├── Frontend Service (static, cached)
├── API Service (dynamic, authenticated)
└── Database Service (internal only)
```

## Required Files

- `README.md` — human-facing docs
- `spec/GOAL.md` — source of truth
- `spec/SUCCESS.md` — pass/fail criteria
- `spec/CONSTRAINTS.md` — hard rules
- `spec/ARCHITECTURE.md` — this file
- `spec/STATUS.md` — auto-updated by CI
- `spec/AGENT-INSTRUCTIONS.md` — deployment guidelines
- `.github/workflows/ci.yml` — CI/CD pipeline
- `.gitignore` — ignore patterns
- `frontend/package.json` — frontend dependencies
- `frontend/src/App.jsx` — main React app
- `frontend/index.html` — entry HTML
- `server.js` — Express backend
- `docker-compose.yml` — local development
- `Dockerfile` — backend Docker build
- `Dockerfile.frontend` — frontend Docker build

## Service Communication

All inter-service communication:
- Uses internal network namespaces
- Is encrypted within the container network
- Implements health checks and circuit breakers
