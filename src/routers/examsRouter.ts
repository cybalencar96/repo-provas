import { Router } from "express";
import * as examsController from "../controllers/examsController";

const router = Router();

router.get('/', examsController.getExams);
router.post('/', examsController.addExam);

export default router;
