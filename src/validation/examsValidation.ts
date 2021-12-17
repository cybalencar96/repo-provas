import joi from 'joi';

const getExamValidation = joi.object({
    teacher: joi.string(),
    subject: joi.string(),
    category: joi.string(),
    name: joi.string(),
});

export {
    getExamValidation,
}