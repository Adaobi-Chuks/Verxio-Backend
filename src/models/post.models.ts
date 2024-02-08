import { model, Schema } from "mongoose";
import { DATABASES } from "../configs/constants.configs";

const postSchema = new Schema({
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

const Post = model(DATABASES.POST, postSchema);
export default Post;