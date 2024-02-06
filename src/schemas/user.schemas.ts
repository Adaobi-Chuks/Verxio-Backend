import Joi from "joi";

const createSchema = Joi.object({
    username: Joi.string().required().min(3).max(100).trim(),
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).max(50),
    role: Joi.string().optional().valid("user", "admin")
});

export {
    createSchema
}