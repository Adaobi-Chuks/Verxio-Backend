import { Router } from "express";
import UserController from '../controllers/user.controllers';
import validate from "../middlewares/validate.middleware";
import { createSchema } from "../schemas/user.schemas";
const router = Router();
const {
    createUser,
    getUser
} = new UserController();

//create or update a user
router.put("/", validate(createSchema), createUser);

//get a user
router.get("/:_id", getUser);

export default router;