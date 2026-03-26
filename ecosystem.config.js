module.exports = {
  apps: [
    {
      name: "backend-service", // PM2 process name
      script: "src/index.js", // Entry point of your backend
      instances: "max", // Use all CPU cores available
      exec_mode: "cluster", // Cluster mode for scaling within container
      watch: false, // Disable file watching in Docker
      cwd: "./", // Working directory
      autorestart: true, // Restart app if it crashes
      max_restarts: 10, // Max restart attempts
      min_uptime: "60s", // Minimum uptime before considered stable
      max_memory_restart: "200M", // Restart if memory usage exceeds limit
      node_args: "--enable-source-maps", // Node.js args
      env: {
        NODE_ENV: "development", // Default env (optional in Docker)
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "/dev/stderr", // Redirect errors to stderr (Docker best practice)
      out_file: "/dev/stdout", // Redirect stdout to stdout
      merge_logs: true, // Merge logs from all instances
      listen_timeout: 5000, // Wait time for app to be ready
      wait_ready: false, // Set true if your app emits "ready" event
    },
  ],
};
