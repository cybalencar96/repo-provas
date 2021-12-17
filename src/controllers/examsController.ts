import { RequestHandler } from "express";
import { getExamValidation } from "../validation/examsValidation";
import * as examsService from '../services/examsService';
import { HttpStatusCode } from '../enums/httpStatusCode';

const getExam: RequestHandler = async (req, res, next) => {
    const { error } = getExamValidation.validate(req.body);

    if (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
    }
    
    try {
        const result = await examsService.getExam(req.body);
        res.send(result)
    } catch (error) {
        next(error)
    }
}

export {
    getExam,
}