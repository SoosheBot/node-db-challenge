const db = require("../data/dbConfig");

module.exports = {
  getResource,
  addResource
};

function getResource() {
  return db("resources");
}

function addResource(resource) {
  return db("resources").insert(resource);
}
