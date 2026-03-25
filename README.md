# Simple Docker Backend

A minimal, structured Node.js Express backend with Docker support. No authentication, just the core structure.

## Structure

```text
/src
  /config      # DB connections, environment setup
  /controllers # Request handlers
  /middleware  # Auth, logging, error-handling logic
  /models      # Database schemas
  /routes      # API route definitions
  app.js       # Main application setup
  index.js     # Server entry point
```

## Setup & Running

1. **Locally:**
   - `npm install`
   - `npm run dev` (uses nodemon)

2. **Using Docker:**
   - `docker-compose up --build` (runs on port 5000)

## API Check

- **Health:** [GET] `http://localhost:5000/api/health`
