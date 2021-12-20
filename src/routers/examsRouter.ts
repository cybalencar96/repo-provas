import { Router } from "express";
import * as examsController from "../controllers/examsController";
import multer from 'multer';
import multerConfig from "../multer.config";

const router = Router();

router.get('/', examsController.getExams);
router.post('/', multer(multerConfig).single('file'), examsController.addExam);

export default router;
