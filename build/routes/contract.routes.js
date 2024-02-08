"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_middleware_1 = __importDefault(require("../middlewares/validate.middleware"));
const contract_controllers_1 = __importDefault(require("../controllers/contract.controllers"));
const contract_schemas_1 = require("../schemas/contract.schemas");
const router = (0, express_1.Router)();
const { createContract, getContract, getAllContract } = new contract_controllers_1.default();
//create or update a user
router.put("/:_id", (0, validate_middleware_1.default)(contract_schemas_1.createSchema), createContract);
//get a user
router.get("/:_id", getContract);
router.get("/", getAllContract);
exports.default = router;
