import { Request, Response } from "express";
import PostService from "../services/post.services";
const {
  create,
  findOne,
  editById
} = new PostService();

export default class PostController {
    async upvote(req: Request, res: Response) {
        const {_id} = req.params;

        let post;
        post = await findOne({_id: _id});
        if (!post) {
            post = await create({_id: _id});
        }
        const editedPost = await editById(_id, {upvotes: (post?.upvotes! + 1)})
        return res.status(201)
            .send({
            success: true,
            message: "Post Upvoted",
            post: editedPost
            });
    }

    async downvote(req: Request, res: Response) {
        const {_id} = req.params;

        let post;
        post = await findOne({_id: _id});
        if (!post) {
            post = await create({_id: _id});
        }
        const editedPost = await editById(_id, {downvotes: (post?.downvotes! + 1)})
        return res.status(201)
            .send({
            success: true,
            message: "Post downvoted",
            post: editedPost
            });
    }
  
    async getPost(req: Request, res: Response) {
        const post = await findOne({_id: req.params._id});
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
    }

}