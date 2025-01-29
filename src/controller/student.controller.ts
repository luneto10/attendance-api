import { Student } from "../model/student.model";
import express from "express";

export const getStudents = async (req: express.Request, res: express.Response) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getStudent = async (req: express.Request, res: express.Response) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).json({ error: "Student not found" });
        } else {
            res.status(200).json(student);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createStudent = async (req: express.Request, res: express.Response) => {
    try {
        const { nuid, name, course, labTime, deviceId } = req.body;
        const student = new Student({ nuid, name, course, labTime, deviceId });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateStudent = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);

        if (!student) {
            res.status(404).json({ error: "Student not found" });
        } else {
            res.status(200).json(student);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteStudent = async (req: express.Request, res: express.Response) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            res.status(404).json({ error: "Student not found" });
        } else {
            res.status(200).json(student);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteStudents = async (req: express.Request, res: express.Response) => {
    try {
        const students = await Student.deleteMany();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
