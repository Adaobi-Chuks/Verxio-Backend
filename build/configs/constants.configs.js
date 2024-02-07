"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASES = exports.SALTROUNDS = exports.MESSAGES = exports.basePath = exports.MAXAGE = exports.SECRET = exports.PORT = void 0;
const PORT = process.env.PORT || 9871;
exports.PORT = PORT;
const SECRET = process.env.SECRET;
exports.SECRET = SECRET;
const SALTROUNDS = 10;
exports.SALTROUNDS = SALTROUNDS;
const MAXAGE = 3 * 24 * 60 * 60;
exports.MAXAGE = MAXAGE;
const basePath = "/api/v1";
exports.basePath = basePath;
const DATABASES = {
    USER: "user",
};
exports.DATABASES = DATABASES;
const MESSAGES = {
    DATABASE: {
        CONNECTED: "Connection to database has been established successfully",
        ERROR: "Unable to connect to database:"
    },
    USER: {
        CREATED: "Profile created successfully.",
        DUPLICATE_EMAIL: "Email already exist.",
        UPDATED: "Profile details updated successfully.",
        NOT_FOUND: "Profile not found."
    },
};
exports.MESSAGES = MESSAGES;
