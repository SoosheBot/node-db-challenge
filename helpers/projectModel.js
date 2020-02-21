const db = require("../data/dbConfig");

module.exports = {
  getProject,
  getProjectId
  // getProjectTask,
  // addProject,
  // updateProject,
  // removeProject
};

function getProject() {
  return db("projects");
};

function getProjectId(project_id) {
  return db("projects as p")
    .select(
        "p.id as id",
        "p.project_name as name",
        "p.description as description",
        "p.completed as completed",
        "t.id as task id",
        "t.description as description",
        "t.notes as notes",
        "t.completed as completed"
    )
    .innerJoin("tasks as t", "t.project_id", "=", "p.id")
    .where("project_id", project_id)
    .first();
};
