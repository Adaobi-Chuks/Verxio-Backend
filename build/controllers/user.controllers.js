"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_configs_1 = require("../configs/constants.configs");
const user_services_1 = __importDefault(require("../services/user.services"));
const { create, findOne, editById, generateAuthToken } = new user_services_1.default();
const { DUPLICATE_EMAIL, CREATED, UPDATED } = constants_configs_1.MESSAGES.USER;
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id, email } = req.body;
            //checks if user with email and id exists
            const user = yield findOne({ email: email });
            const user2 = yield findOne({ _id: _id });
            if (user) {
                if (user._id !== _id) {
                    //sends an error if the email exists
                    return res.status(409)
                        .send({
                        success: false,
                        message: DUPLICATE_EMAIL
                    });
                }
                const updatedUser = yield editById(_id, req.body);
                return res.status(201)
                    .send({
                    success: true,
                    message: UPDATED,
                    user: updatedUser
                });
            }
            else if (user2) {
                const updatedUser = yield editById(_id, req.body);
                return res.status(201)
                    .send({
                    success: true,
                    message: UPDATED,
                    user: updatedUser
                });
            }
            else {
                //creates a user if the email and id doesn't exist
                const createdUser = yield create(req.body);
                return res.status(201)
                    .send({
                    success: true,
                    message: CREATED,
                    user: createdUser
                });
            }
        });
    }
}
exports.default = UserController;
