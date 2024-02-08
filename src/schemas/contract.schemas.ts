import Joi from "joi";

const createSchema = Joi.object({
    ownerId: Joi.string().required().trim(),
    userId: Joi.string().required().trim(),
});

export {
    createSchema
}