// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: "ballet",
  },
  port: 6543,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
