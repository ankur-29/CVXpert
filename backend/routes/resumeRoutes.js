import express from 'express';
import { createResume, getResumeById,
    getUserResumes, updateResume, deleteResume
 } from '../controllers/resumeController';

const resumeRouter = express.Router();

resumeRouter.post("/", createResume);
resumeRouter.get("/", getUserResumes);
resumeRouter.get("/:id", getResumeById);
resumeRouter.put("/:id", updateResume);
resumeRouter.delete("/:id", deleteResume);

export default resumeRouter;
