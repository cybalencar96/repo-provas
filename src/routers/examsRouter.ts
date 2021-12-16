import { Router } from "express";
import * as examsController from "../controllers/examsController";

const router = Router();

router.get('/', examsController.getBySubject);

export default router;
