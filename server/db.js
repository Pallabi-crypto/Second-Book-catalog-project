import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("MongoDB Error:", err);
  }
};

export default connectDB;