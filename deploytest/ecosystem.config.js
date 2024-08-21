module.exports = {
  apps: [
    {
      name: "docker-test",
      script: "npx",
      args: "next start",
      watch: false,
      // ignore_watch: ["node_modules"],
      // watch_delay: 1000,
      // watch_options: {
      //     followSymlinks: false
      // },
      wait_ready: true,
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        APP_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        APP_ENV: "production",
        PORT: 3001,
      },
      env_productiontest: {
        APP_ENV: "productiontest",
        PORT: 3002,
      },
    },
  ],

  // deploy: {
  //     production: {
  //         user: "root",
  //         host: "103.179.190.24",
  //         ref: "origin/master",
  //         repo: "git@github.com:Mapstudy/backend.git",
  //         path: "/home/mapstudy/backend",
  //         "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
  //     }
  // }
};
