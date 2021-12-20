import { RequestHandler } from 'express'
import joi from "joi";
import { HttpStatusCode } from '../enums/httpStatusCode';

function validateBody(validationSchema: joi.ObjectSchema<any> ) {
    const request: RequestHandler = (req, res, next) => {
        console.log(req.body)
        const { error } = validationSchema.validate(req.body);

        if (error) {
            return res.status(HttpStatusCode.BAD_REQUEST).send(error.details[0].message);
        }

        next();
    }

    return request;
}


export {
    validateBody,
}