"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controllers_1 = __importDefault(require("../controllers/post.controllers"));
const router = (0, express_1.Router)();
const { upvote, downvote, getPost } = new post_controllers_1.default();
//create or update a user
router.put("/upvotes/:_id", upvote);
router.put("/downvotes/:_id", downvote);
//get a user
router.get("/:_id", getPost);
exports.default = router;
