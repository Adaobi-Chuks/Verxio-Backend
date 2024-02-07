import Joi from "joi";

const createSchema = Joi.object({
    _id: Joi.string().required().trim(),
    email: Joi.string().email().required().lowercase().trim(),
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    profilePicUrl: Joi.string().required().trim(),
    bio: Joi.string().required().trim(),
    phoneNumber: Joi.string().required().trim(),
    website: Joi.string().required().trim(),
    powUrl: Joi.string().required().trim(),
});

export {
    createSchema
}