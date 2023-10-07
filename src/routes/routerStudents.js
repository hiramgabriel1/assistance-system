import { Router } from "express";
import studentsAdminAssistant from "../controllers/studentController.js";

const students = new studentsAdminAssistant();

const studentRouter = Router();

studentRouter.get("/private/admin", (req, res) => {
  students.getStudentsAssistants(req, res);
});
studentRouter.post("/", (req, res) => {
  students.registerAssistantStudent(req, res);
});

export default studentRouter;
