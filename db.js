const mongoose = require("mongoose");
require("dotenv").config();

// const URL = "mongodb://localhost:27017 /gdsc-project";
async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`Database connection succesfull`);
  } catch (error) {
    console.log(`Mongoose Error ${error}`);
    process.exit(1);
  }
}

module.exports = connectDB;
