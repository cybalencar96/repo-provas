import { Router } from "express";
import * as examsController from "../controllers/examsController";

const router = Router();

router.get('/', examsController.getExams);

export default router;
