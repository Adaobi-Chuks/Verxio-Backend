import { Router } from "express";
import UserController from '../controllers/user.controllers';
import validate from "../middlewares/validate.middleware";
import { createSchema } from "../schemas/user.schemas";
const router = Router();
const {
    createUser,
} = new UserController();

//create/ update a user or signup
router.put("/", 
// validate(createSchema), 
createUser);

export default router;