import { RequestHandler } from "express";
import * as subjectService from '../services/subjectService';

const getAll: RequestHandler = async (req, res, next) => {
    try {
        const subjects = await subjectService.get();

        res.send(subjects);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
}