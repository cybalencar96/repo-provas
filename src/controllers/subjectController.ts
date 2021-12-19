import { RequestHandler } from "express";
import { HttpStatusCode } from "../enums/httpStatusCode";
import * as subjectService from '../services/subjectService';
import { getManyValidation } from "../validation/subjectsValidation";

const getSubjectsWithExams: RequestHandler = async (req, res, next) => {
    try {
        const subjects = await subjectService.getWithExams();

        res.send(subjects);
    } catch (error) {
        next(error)
    }
}

const getMany: RequestHandler = async (req, res, next) => {
    const { error } = getManyValidation.validate(req.query);

    if (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
    }

    try {
        const subjects = await subjectService.getMany(req.query);

        res.send(subjects);
    } catch (error) {
        next(error);
    }
}

export {
    getSubjectsWithExams,
    getMany,
}