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
const post_models_1 = __importDefault(require("../models/post.models"));
class PostService {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPost = yield post_models_1.default.create(user);
            return yield post_models_1.default.findOne({ _id: createdPost.id }, "-__v");
        });
    }
    findOne(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_models_1.default.findOne(param, "-__v");
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_models_1.default.find({}, "-__v");
        });
    }
    editById(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield post_models_1.default.findOne({ _id: id })) {
                return yield post_models_1.default.findByIdAndUpdate(id, { $set: obj }, { new: true }).select("-__v");
            }
        });
    }
}
exports.default = PostService;
