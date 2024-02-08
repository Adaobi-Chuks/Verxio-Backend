"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_configs_1 = require("../configs/constants.configs");
const postSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
        trim: true
    },
    upvotes: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    downvotes: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    }
});
const Post = (0, mongoose_1.model)(constants_configs_1.DATABASES.POST, postSchema);
exports.default = Post;
