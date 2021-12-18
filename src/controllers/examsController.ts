import { RequestHandler } from "express";
import { getExamValidation, postExamValidation } from "../validation/examsValidation";
import * as examsService from '../services/examsService';
import { HttpStatusCode } from '../enums/httpStatusCode';

const getExams: RequestHandler = async (req, res, next) => {
    const { error } = getExamValidation.validate(req.body);

    if (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
    }
    
    try {
        const result = await examsService.getExams(req.body);
        res.send(result)
    } catch (error) {
        next(error);
    }
}

const addExam: RequestHandler = async (req, res, next) => {
    const { error } = postExamValidation.validate(req.body);

    if (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
    }

    try {
        const addedExam = await examsService.addExam(req.body);

        res.send(addedExam);
    } catch (error) {
        if (error.name === 'ExamError') {
            return res.status(HttpStatusCode.BAD_REQUEST).send(error.message);
        }
        
        next(error);
    }
}

export {
    getExams,
    addExam,
}