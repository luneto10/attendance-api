import express from "express";
import cors from "cors";
import studentRouter from "./routes/student.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("trust proxy", true);

app.use("/api/student", studentRouter);

export default app;
