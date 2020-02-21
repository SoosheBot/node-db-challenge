exports.up = function(knex) {
  return knex.schema
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("description", 280).notNullable();
      tbl.text("notes", 280);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", tbl => {})
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.text("project_name", 255).notNullable();
      tbl.text("description");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
