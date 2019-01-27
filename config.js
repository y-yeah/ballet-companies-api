module.exports = {
  // database connection configs
  db: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "ballet",
    },
    port: 6543,
  },

  // port for server to run on
  express: {
    port: 3000,
  },
};
