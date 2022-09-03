import * as Joi from "joi";


const categoriesValidator = Joi.object().keys({
    category: Joi.string().min(3).max(30).required()
});

export default categoriesValidator;
