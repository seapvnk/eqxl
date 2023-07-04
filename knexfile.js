module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./storage/dev.sqlite3",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
