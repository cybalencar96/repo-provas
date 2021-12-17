import { RequestHandler } from "express";
import * as teacherService from '../services/teacherService';

const getAll: RequestHandler = async (req, res, next) => {
    try {
        const teachers = await teacherService.get();

        res.send(teachers);
    } catch (error) {
        next(error);
    }
}

export {
    getAll,
}