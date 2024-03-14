const { MongoClient } = require("mongodb");
const { config } = require("dotenv");

// Load environment variables
config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function dbrun() {
  try {
    await client.connect();
    console.log("Connected to the database");
    const db = client.db("Users");
    return db.collection("users");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; 
  }
}

module.exports = { dbrun };
