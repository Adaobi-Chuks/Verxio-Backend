"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const createSchema = joi_1.default.object({
    _id: joi_1.default.string().required().trim(),
    email: joi_1.default.string().email().required().lowercase().trim(),
    firstName: joi_1.default.string().required().trim(),
    lastName: joi_1.default.string().required().trim(),
    profilePicUrl: joi_1.default.string().required().trim(),
    bio: joi_1.default.string().required().trim(),
    phoneNumber: joi_1.default.string().required().trim(),
    website: joi_1.default.string().required().trim(),
    powUrl: joi_1.default.string().required().trim(),
});
exports.createSchema = createSchema;
