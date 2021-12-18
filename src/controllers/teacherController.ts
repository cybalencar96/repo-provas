import { RequestHandler } from "express";
import * as teacherService from '../services/teacherService';
import { getManyValidation } from "../validation/teachersValidation";
import { HttpStatusCode } from '../enums/HttpStatusCode';

const getTeachersWithExams: RequestHandler = async (req, res, next) => {
    try {
        const teachers = await teacherService.getWithExams();

        res.send(teachers);
    } catch (error) {
        next(error);
    }
}

const getMany: RequestHandler = async (req, res, next) => {
    const { error } = getManyValidation.validate(req.query);

    if (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
    }

    try {
        const teachers = await teacherService.getMany(req.query);

        res.send(teachers);
    } catch (error) {
        next(error);
    }
}

export {
    getTeachersWithExams,
    getMany,
}