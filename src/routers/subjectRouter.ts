import { Router } from "express";
import * as subjectController from "../controllers/subjectController";

const router = Router();

router.get('/', subjectController.getSubjectsWithExams);
router.get('/where', subjectController.getMany);

export default router;
