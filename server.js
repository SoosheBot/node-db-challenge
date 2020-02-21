const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectRouter = require("./routers/projectRouter");
const taskRouter = require("./routers/taskRouter");
const resourceRouter = require("./routers/resourceRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

module.exports = server;
