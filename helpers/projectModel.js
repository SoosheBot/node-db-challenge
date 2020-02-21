const db = require("../data/dbConfig");

module.exports = {
  getProject
  // getProjectId,
  // getProjectTask,
  // addProject,
  // updateProject,
  // removeProject
};

function getProject() {
  return db("projects");
};
