const express = require("express");

const Project = require("../helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  Project.getProject()
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(400).json({ errorMessage: "Projects may not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Project.getProjectId(id)
    .then(project => {
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(400).json({ errorMessage: "Project/ID does not exist."})
        } 
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "Could not find project with this ID." });
    });
});

router.get("/:id/tasks", (req,res) => {
    const { id } = req.params;
    Project.getProjectTask(id)
    .then(tasks => {
        if (tasks.length) {
          res.status(200).json(tasks);
        } else {
          res.status(404).json({ error });
        }
      })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Failed to get tasks." });
      });
})

router.post("/", validateProject, (req,res) => {

}); 



//CUSTOM MIDDLEWARE

function validateProject(req, res, next) {
    if (req.body) {
      next();
    } else if (!req.body.name) {
      res
        .status(400)
        .json({ message: "Missing required information--name" });
    } else {
      res.status(404).json({ errorMessage: "Project may not exist" });
    }
  }

function validateProjectId(req, res, next) {
  Project.get(req.params.id)
    .then(checkId => {
      if (checkId) {
        req.checkId = checkId;
        next();
      } else {
        res.status(404).json({ errorMessage: "Project ID may not exist" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not verify ID." });
    });
};

module.exports = router;
