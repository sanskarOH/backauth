const jwt = require("jsonwebtoken");
const { dbrun } = require("../db/db.js");

async function getUserDetails(token) {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    const username = decoded.username;

    const users = await dbrun();
    const user = await users.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      username: user.username,
      password:user.password
    };
  } catch (error) {
    throw error;
  }
}

module.exports = getUserDetails;
