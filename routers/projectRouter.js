const express = require("express");

const Project = require("../helpers/projectModel");

const router = express.Router();

router.get("/", (req,res) => {
    Project.getProject()
    .then(projects => {
        if (projects) {
            res.status(200).json(projects);
        } else {
            res.status(400).json({ errorMessage: "Projects may not exist."})
        };
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Could not get projects"})
    });
});

module.exports = router;