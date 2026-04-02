import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));
Connection();
