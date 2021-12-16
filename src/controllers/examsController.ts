import { RequestHandler } from "express";
import { getBySubjectValidation } from "../validation/examsValidation";
import * as examsService from '../services/examsService';
import { HttpStatusCode } from '../enums/httpStatusCode';

const getBySubject: RequestHandler = async (req, res, next) => {
    const { error } = getBySubjectValidation.validate(req.body);

    if (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
    }
    
    try {
        const result = await examsService.getBySubject(req.body.subject);
        res.send(result)
    } catch (error) {
        next(error)
    }
}

export {
    getBySubject,
}