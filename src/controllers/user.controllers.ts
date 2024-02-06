import { Request, Response } from "express";
import { MESSAGES } from "../configs/constants.configs";
import UserService from "../services/user.services";
const {
  create,
  findOne,
  editById,
  generateAuthToken
} = new UserService();
const {
  DUPLICATE_EMAIL,
  CREATED,
  UPDATED
} = MESSAGES.USER;

export default class UserController {
  async createUser(req: Request, res: Response) {
    const {_id, email} = req.body;
    
    //checks if user with email and id exists
    const user = await findOne({email: email});
    const user2 = await findOne({_id: _id});
    if (user) {
      if(user._id !== _id) {
        //sends an error if the email exists
        return res.status(409)
        .send({
          success: false,
          message: DUPLICATE_EMAIL
        });
      }
      const updatedUser = await editById(_id, req.body);
      return res.status(201)
      .send({
        success: true,
        message: UPDATED,
        user: updatedUser
      });
    } else if (user2) {
      const updatedUser = await editById(_id, req.body);
      return res.status(201)
      .send({
        success: true,
        message: UPDATED,
        user: updatedUser
      });
    } else {
      //creates a user if the email and id doesn't exist
      const createdUser = await create(req.body);
      return res.status(201)
      .send({
        success: true,
        message: CREATED,
        user: createdUser
      });
    }
  }
}