import { Router } from "express";
import * as examsController from "../controllers/examsController";
import multer from 'multer';
import multerConfig from "../multer.config";
import { postExamValidation } from '../validation/examsValidation';
import { validateBody } from '../middlewares/validationMiddleware';

const router = Router();

router.get('/', examsController.getExams);
router.post('/', validateBody(postExamValidation), multer(multerConfig).single('file'), examsController.addExam);

export default router;
