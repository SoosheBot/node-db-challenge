exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.text("project_name", 255).notNullable();
      tbl.text("description");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
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
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.text("name", 280).notNullable();
      tbl.text("description", 280);
    })
    .createTable("project_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
