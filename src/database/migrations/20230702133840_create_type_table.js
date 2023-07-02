const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema
    .createTable("type", function (table) {
      table.uuid("id").primary().defaultTo(uuidv4());
      table.string("name").notNullable();
      table.text("validation");
      table.text("transformation");
    })
    .then(function () {
      return knex.schema.createTable("object_type", function (table) {
        table.uuid("object_id").unsigned().references("id").inTable("object");
        table.uuid("type_id").unsigned().references("id").inTable("type");
        table.primary(["object_id", "type_id"]);
      });
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("object_type").then(function () {
    return knex.schema.dropTable("type");
  });
};
