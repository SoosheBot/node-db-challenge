const express = require("express");

const Task = require("../helpers/taskModel");

const router = express.Router();

router.post("/", validateTask, (req, res) => {
    const body = { ...req.body };
    Task.addTask(body)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to create new task" });
      });
  });
  
  function validateTask(req, res, next) {
    if (req.body) {
      next();
    } else if (!req.body.description) {
      res
        .status(400)
        .json({ message: "Missing required information--description" });
    } else {
      res.status(404).json({ errorMessage: "Task may not exist" });
    }
  }
  
  module.exports = router;
  