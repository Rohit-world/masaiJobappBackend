const express = require("express");
const jwt = require("jsonwebtoken");
const JobRoute = express.Router();
const { JobModel } = require("../models/job.model");
JobRoute.post("/", async (req, res) => {

  });
  


module.exports = { JobRoute };