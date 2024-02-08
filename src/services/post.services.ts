import IPost from "../interfaces/post.interfaces";
import Post from "../models/post.models";

export default class PostService {
    async create(user: Partial<IPost>) {
        const createdPost = await Post.create(user);
        return await Post.findOne({ _id: createdPost.id}, "-__v");
    }

    async findOne(param: any) {
        return await Post.findOne(param, "-__v");
    }

    async find() {
        return await Post.find({}, "-__v");
    }

    async editById(id: string, obj: Partial<IPost>) {
        if(await Post.findOne({ _id: id })){
            return await Post.findByIdAndUpdate(id, { $set: obj }, { new: true }).select("-__v");
        }
    }
}