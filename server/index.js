import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import errorHandler from "./errors/handleErrors.js";

// Config
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(cookieParser());

// DB
mongoose.set("strictQuery", false);
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

// Routes
app.use("/api/v1/auth", authRoutes);
app.use(errorHandler);

// Serve
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
  connectDB();
});
