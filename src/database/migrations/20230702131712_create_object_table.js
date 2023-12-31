exports.up = function (knex) {
  return knex.schema.createTable("object", function (table) {
    table.uuid("id").primary();
    table.integer("index").notNullable();
    table.text("value").notNullable();
    table.uuid("document_id").unsigned().references("id").inTable("document");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("object");
};
