"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./user.routes"));
const contract_routes_1 = __importDefault(require("./contract.routes"));
const post_routes_1 = __importDefault(require("./post.routes"));
const doc_routes_1 = __importDefault(require("./doc.routes"));
const constants_configs_1 = require("../configs/constants.configs");
exports.default = (app) => {
    app.use(`${constants_configs_1.basePath}/profiles`, user_routes_1.default);
    app.use(`${constants_configs_1.basePath}/contracts`, contract_routes_1.default);
    app.use(`${constants_configs_1.basePath}/posts`, post_routes_1.default);
    app.use(`${constants_configs_1.basePath}/docs`, doc_routes_1.default);
};
