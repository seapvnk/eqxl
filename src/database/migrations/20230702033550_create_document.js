exports.up = function (knex) {
    return knex.schema.createTable("document", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.text("name").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("document");
  };
  