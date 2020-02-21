const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectRouter = require("./routers/projectRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/projects", projectRouter);

module.exports = server;
