import { Router } from "express";
import * as teacherController from "../controllers/teacherController";

const router = Router();

router.get('/', teacherController.getAll);

export default router;
