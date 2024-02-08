"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_configs_1 = require("../configs/constants.configs");
const contractSchema = new mongoose_1.Schema({
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
const Contract = (0, mongoose_1.model)(constants_configs_1.DATABASES.CONTRACT, contractSchema);
exports.default = Contract;
