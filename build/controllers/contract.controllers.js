"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_services_1 = __importDefault(require("../services/contract.services"));
const getDate_utils_1 = __importDefault(require("../utils/getDate.utils"));
const { create, findOne, find, editById } = new contract_services_1.default();
class ContractController {
    createContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const contract = yield findOne({ _id: _id });
            if (contract) {
                return res.status(400)
                    .send({
                    success: false,
                    message: "Contract already created",
                    contract: contract
                });
            }
            else {
                const date = (0, getDate_utils_1.default)();
                const createdContract = yield create(Object.assign({ _id: _id, startDate: date }, req.body));
                return res.status(201)
                    .send({
                    success: true,
                    message: "Contract created successfully",
                    contract: createdContract
                });
            }
        });
    }
    getContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = yield findOne({ _id: req.params._id });
            if (contract) {
                return res.status(200)
                    .send({
                    success: true,
                    message: "Contract fetched",
                    contract: contract
                });
            }
            return res.status(404)
                .send({
                success: false,
                message: "Contract not found"
            });
        });
    }
    getAllContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contract = yield find();
            return res.status(200)
                .send({
                success: true,
                message: "All contracts fetched",
                contract: contract
            });
        });
    }
}
exports.default = ContractController;
