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
const post_services_1 = __importDefault(require("../services/post.services"));
const { create, findOne, editById } = new post_services_1.default();
class PostController {
    upvote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            let post;
            post = yield findOne({ _id: _id });
            if (!post) {
                post = yield create({ _id: _id });
            }
            const editedPost = yield editById(_id, { upvotes: ((post === null || post === void 0 ? void 0 : post.upvotes) + 1) });
            return res.status(201)
                .send({
                success: true,
                message: "Post Upvoted",
                post: editedPost
            });
        });
    }
    downvote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            let post;
            post = yield findOne({ _id: _id });
            if (!post) {
                post = yield create({ _id: _id });
            }
            const editedPost = yield editById(_id, { downvotes: ((post === null || post === void 0 ? void 0 : post.downvotes) + 1) });
            return res.status(201)
                .send({
                success: true,
                message: "Post downvoted",
                post: editedPost
            });
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield findOne({ _id: req.params._id });
            if (post) {
                return res.status(200)
                    .send({
                    success: true,
                    message: "Post fetched",
                    contract: post
                });
            }
            return res.status(404)
                .send({
                success: false,
                message: "Post not found"
            });
        });
    }
}
exports.default = PostController;
