module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./storage/dev.sqlite3",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
