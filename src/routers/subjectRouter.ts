import { Router } from "express";
import * as subjectController from "../controllers/subjectController";

const router = Router();

router.get('/', subjectController.getAll);

export default router;
