import "dotenv/config";
import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/gdsc-project";

async function connectDB() {
  try {
    await mongoose.connect(`${process.MONGO_URL}`);
    console.log(`Database connection succesfull`);
  } catch (error) {
    console.log(`Mongoose Error ${error}`);
    process.exit(1);
  }
}

export default connectDB;
