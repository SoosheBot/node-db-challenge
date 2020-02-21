const db = require("../data/dbConfig");

module.exports = {
  addTask
};

function addTask(task) {
    return db("tasks").insert(task);
  }