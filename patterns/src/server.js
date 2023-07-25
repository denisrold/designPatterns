const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();
server.use(morgan("dev"));
//Parseo a formato json
server.use(express.json());
server.use(router);
module.exports = server;
