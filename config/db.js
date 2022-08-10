import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

const url = process.env.MONGO_URL;

async function connectDB() {
    await mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected21 to the database!");
        })
        .catch((err) => {
            console.log("Cannot connect to the database!", err);
            process.exit();
        });
}

export default connectDB;