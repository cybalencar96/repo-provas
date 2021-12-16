import joi from 'joi';

const getBySubjectValidation = joi.object({
    subject: joi.string().required(),
});

export {
    getBySubjectValidation,
}