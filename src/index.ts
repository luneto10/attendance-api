import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: ".env.local" });
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        console.log("MongoDB connected successfully!");
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
