import { Router } from "express";
import validate from "../middlewares/validate.middleware";
import ContractController from "../controllers/contract.controllers";
import { createSchema } from "../schemas/contract.schemas";
import upload from "../configs/multer.configs";
const router = Router();
const router1 = Router();
const {
    createContract,
    getContract,
    getAllContract,
    uploadFile
} = new ContractController();

//create or update a user
router.put("/:_id", validate(createSchema), createContract);

//get a user
router.get("/:_id", getContract);
router1.post("/", upload.single('file'), uploadFile);
router.get("/", getAllContract);

export default router;
export {router1}