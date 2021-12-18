import { Router } from "express";
import * as teacherController from "../controllers/teacherController";

const router = Router();

router.get('/', teacherController.getTeachersWithExams);
router.get('/where', teacherController.getMany);

export default router;
