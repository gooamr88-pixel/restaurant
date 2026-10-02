// PM2 process for the VPS. Start with: pm2 start ecosystem.config.cjs && pm2 save
// Port 3300 because 3000/3100/3210 are taken by other sites on the same server.
module.exports = {
  apps: [
    {
      name: "luzna-restaurant",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3300 -H 127.0.0.1",
      env: { NODE_ENV: "production" },
      max_memory_restart: "400M",
    },
  ],
};
