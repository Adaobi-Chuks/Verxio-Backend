import { model, Schema } from "mongoose";
import { DATABASES } from "../configs/constants.configs";

const contractSchema = new Schema({
    _id: {
        type: String,
        required: true,
        trim: true
    },
    ownerId: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['ongoing', 'finished', 'cancelled'],
        default: "ongoing"
    }
}, {
    timestamps: true
});

const Contract = model(DATABASES.CONTRACT, contractSchema);
export default Contract;