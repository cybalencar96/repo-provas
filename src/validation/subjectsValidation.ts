import joi from 'joi';

const getManyValidation = joi.object({
    name: joi.string().min(1),
    teacher: joi.string().min(1),
});

export {
    getManyValidation,
}