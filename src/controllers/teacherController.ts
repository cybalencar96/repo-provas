import { RequestHandler } from "express";
import * as teacherService from '../services/teacherService';

const getTeachersWithExams: RequestHandler = async (req, res, next) => {
    try {
        const teachers = await teacherService.getWithExams();

        res.send(teachers);
    } catch (error) {
        next(error);
    }
}

export {
    getTeachersWithExams,
}