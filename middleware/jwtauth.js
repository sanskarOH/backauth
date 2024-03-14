const jwt = require("jsonwebtoken");

function tokenGenerate(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN);
}

function verifyToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN);
}

module.exports = { tokenGenerate, verifyToken };
