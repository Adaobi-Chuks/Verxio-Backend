import IContract from "../interfaces/contract.interfaces";
import Contract from "../models/contract.models";

export default class ContractService {
    async create(user: Partial<IContract>) {
        const createdContract = await Contract.create(user);
        return await Contract.findOne({ _id: createdContract.id}, "-__v");
    }

    async findOne(param: any) {
        return await Contract.findOne(param, "-__v");
    }

    async find() {
        return await Contract.find({}, "-__v");
    }

    async editById(id: string, obj: Partial<IContract>) {
        if(await Contract.findOne({ _id: id })){
            return await Contract.findByIdAndUpdate(id, { $set: obj }, { new: true });
        }
    }
}