import { MAXAGE, SECRET } from "../configs/constants.configs";
import IUser from "../interfaces/user.interfaces";
import User from "../models/user.models";
import jwt from "jsonwebtoken";
const secret = process.env.SECRET!;

export default class UserService {
    async create(user: Partial<IUser>) {
        const createdUser = await User.create(user);
        return await User.findOne({ _id: createdUser.id}, "-__v -password");
    }

    async findOne(param: any) {
        return await User.findOne(param, "-__v");
    }

    async editById(id: string, obj: Partial<IUser>) {
        if(await User.findOne({ _id: id })){
            return await User.findByIdAndUpdate(id, { $set: obj }, { new: true }).select("-password");
        }
    }

    generateAuthToken (user: IUser) {
        return jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        }, secret, {
            expiresIn: MAXAGE
        });
    }   
}