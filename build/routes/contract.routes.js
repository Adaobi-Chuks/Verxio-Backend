"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router1 = void 0;
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../middlewares/validate.middleware"));
const contract_controllers_1 = __importDefault(require("../controllers/contract.controllers"));
const contract_schemas_1 = require("../schemas/contract.schemas");
const multer_configs_1 = __importDefault(require("../configs/multer.configs"));
const router = (0, express_1.Router)();
const router1 = (0, express_1.Router)();
exports.router1 = router1;
const { createContract, getContract, getAllContract, uploadFile } = new contract_controllers_1.default();
//create or update a user
router.put("/:_id", (0, validate_middleware_1.default)(contract_schemas_1.createSchema), createContract);
//get a user
router.get("/:_id", getContract);
router1.post("/", multer_configs_1.default.single('file'), uploadFile);
router.get("/", getAllContract);
exports.default = router;
