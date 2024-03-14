const express = require("express");
const { verifyLogin, verifySignup } = require("../controller/authController");

async function signup(req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    await verifySignup(username, password);
    res
      .status(200)
      .json({ success: true, message: "User Signed Up Successfully" });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await verifyLogin(username, password);
    res
      .status(200)
      .json({ success: true, message: "Logged In Successfully", token });
  } catch (error) {
    res.status(400).json({ message: "Logged in Failed" });
    next(error);
  }
}

const AuthRouter = express.Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/login", login);
module.exports = AuthRouter;
