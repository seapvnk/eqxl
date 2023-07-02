const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("document", function (table) {
    table.uuid("id").primary().defaultTo(uuidv4());
    table.text("name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("document");
};
