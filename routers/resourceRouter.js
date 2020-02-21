const express = require("express");

const Resource = require("../helpers/resourceModel");

const router = express.Router();

router.get("/", (req, res) => {
  Resource.getResource()
    .then(resources => {
      if (resources) {
        res.status(200).json(resources);
      } else {
        res.status(400).json({ errorMessage: "Resources may not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get resources" });
    });
});

router.post("/", validateResource, (req, res) => {
  const body = { ...req.body };
  Resource.addResource(body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});


//CUSTOM MIDDLEWARE
function validateResource(req, res, next) {
  if (req.body) {
    next();
  } else if (!req.body.name) {
    res
      .status(400)
      .json({ message: "Missing required information--name" });
  } else {
    res.status(404).json({ errorMessage: "Resource may not exist" });
  }
}

module.exports = router;


