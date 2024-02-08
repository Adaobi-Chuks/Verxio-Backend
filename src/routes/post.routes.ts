import { Router } from "express";
import PostController from "../controllers/post.controllers";
const router = Router();
const {
    upvote,
    downvote,
    getPost
} = new PostController();

//create or update a user
router.put("/upvotes/:_id", upvote);
router.put("/downvotes/:_id", downvote);

//get a user
router.get("/:_id", getPost);

export default router;