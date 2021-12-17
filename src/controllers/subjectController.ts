import { RequestHandler } from "express";
import * as subjectService from '../services/subjectService';

const getSubjectsWithExams: RequestHandler = async (req, res, next) => {
    try {
        const subjects = await subjectService.getWithExams();

        res.send(subjects);
    } catch (error) {
        next(error);
    }
}

export {
    getSubjectsWithExams,
}