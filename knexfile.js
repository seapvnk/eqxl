module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./storage/dev.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
