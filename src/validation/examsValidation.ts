import joi from 'joi';

const getExamValidation = joi.object({
    teacher: joi.string(),
    subject: joi.string(),
    category: joi.string(),
    name: joi.string(),
});

const postExamValidation = joi.object({
    name: joi.string().min(4).required(),
	category: joi.string().min(2).required(),
	subject: joi.string().min(4).required(),
	teacher: joi.string().min(4).required(),
    linkPdf: joi.string().min(10).required(),
});

export {
    getExamValidation,
    postExamValidation,
}