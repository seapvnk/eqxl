import knex from "knex";

export default knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./storage/dev.sqlite3",
  },
});
