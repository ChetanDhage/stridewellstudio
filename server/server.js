require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// Initialize roles
import initializeRoles from "./config/initRoles";
initializeRoles();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
