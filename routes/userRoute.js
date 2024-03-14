const express = require("express");
const getUserDetails = require("../controller/userController");

const Userrouter = express.Router();

Userrouter.get("/user", async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Extract token from Authorization header
    const userDetails = await getUserDetails(token);
    res.json(userDetails);
  } catch (error) {
    next(error);
  }
});

module.exports = Userrouter;
