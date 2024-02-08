import { Router } from "express";
import validate from "../middlewares/validate.middleware";
import ContractController from "../controllers/contract.controllers";
import { createSchema } from "../schemas/contract.schemas";
const router = Router();
const {
    createContract,
    getContract,
    getAllContract
} = new ContractController();

//create or update a user
router.put("/:_id", validate(createSchema), createContract);

//get a user
router.get("/:_id", getContract);
router.get("/", getAllContract);

export default router;