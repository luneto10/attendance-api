import express from "express";
import {
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    deleteStudents,
    createStudent,
} from "../controller/student.controller";

const router = express.Router();

router.post("/", createStudent);

router.get("/", getStudents);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

router.delete("/", deleteStudents);

export default router;
