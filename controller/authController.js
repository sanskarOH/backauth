const { dbrun } = require("../db/db.js");
const bcrypt = require("bcrypt");
const { tokenGenerate } = require("../middleware/jwtauth.js");

async function verifySignup(username, password) {
    try {
      const users = await dbrun();
      const user = await users.findOne({ username: username });
      if (user) {
        throw {
          statusCode: 400,
          message: "User Already Exists",
        };
      }
      const hash = await bcrypt.hashSync(password, 8)
      await users.insertOne({ username: username, password: hash });
    } catch (error) {
      console.error("Error signing up user:", error);
      throw error;
    }
  }

async function verifyLogin(username, password) {
  const users = await dbrun();
  const user = await users.findOne({ username: username });
  if (!user) {
    throw {
      statusCode: 400,
      Message: "Please Sign up first",
    };
  }
  const res = await bcrypt.compare(password, user.password);
  if (!res) {
    throw {
      statusCode: 401,
      Message: "Access is not Authorized",
    };
  }
  return tokenGenerate(username);
}

module.exports = { verifySignup, verifyLogin };
