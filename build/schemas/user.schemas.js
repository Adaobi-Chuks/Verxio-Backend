"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const createSchema = joi_1.default.object({
    username: joi_1.default.string().required().min(3).max(100).trim(),
    email: joi_1.default.string().email().required().lowercase().trim(),
    password: joi_1.default.string().required().min(6).max(50),
    role: joi_1.default.string().optional().valid("user", "admin")
});
exports.createSchema = createSchema;
