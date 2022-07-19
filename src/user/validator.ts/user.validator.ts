import * as Joi from "joi";


const userValidator = Joi.object().keys({
    firstName: Joi.string().min(3).max(30).required()
});

export default userValidator;
