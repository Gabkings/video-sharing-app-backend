import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db";

import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import videoRoutes from "./routes/videos";
import commentRoutes from "./routes/comment";

import cors from "cors";

const app = express();
dotenv.config();
connectDB();
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success: false,
        message,
    });
});
app.use(cookieParser());
app.use(express.json());
app.use("/api/account", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.listen(8800, () => {
    console.log(`app listening on port 8800`);
});