import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { AdminRouter } from "./router/auth.js";
import { studentRouter } from "./router/student.js";
import { bookRouter } from "./router/book.js";
import { Admin } from "./model/Admin.js";
import { Student } from "./model/Student.js";
import { Book } from "./model/Book.js";
import connectDB from "./db.js";
import './seed.js'; // ✅ MAKE SURE THIS FILE RUNS
dotenv.config();   // Always configure first
connectDB();
const app = express();


const allowedOrigins = [
  "https://second-book-catalog-project.vercel.app",
  "https://second-book-catalog-project-muuh.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", AdminRouter);
app.use("/register", studentRouter)
console.log("✅ Book router is being used");
app.use("/book", bookRouter)

app.get('/dashboard', async(req,res) =>{
  try{
    const student = await Student.countDocuments()
    const book = await Book.countDocuments()
    const admin = await Admin.countDocuments()
    return res.json({ok: true, student, book, admin})
  }catch(err){
    return res.json(err)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});