import IUser from "../interfaces/user.interfaces";
import User from "../models/user.models";

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
}