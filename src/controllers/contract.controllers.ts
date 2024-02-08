import { Request, Response } from "express";
import ContractService from "../services/contract.services";
import formatDate from "../utils/getDate.utils";
const {
  create,
  findOne,
  find,
  editById
} = new ContractService();

export default class ContractController {
  async createContract(req: Request, res: Response) {
    const {_id} = req.params;
    
    const contract = await findOne({_id: _id});
    if (contract) {
        return res.status(400)
        .send({
          success: false,
          message: "Contract already created",
          contract: contract
        });
    } else {
      const date = formatDate()
      const createdContract = await create({_id: _id, startDate: date, ...req.body});
      return res.status(201)
      .send({
        success: true,
        message: "Contract created successfully",
        contract: createdContract
      });
    }
  }
  
  async getContract(req: Request, res: Response) {
    const contract = await findOne({_id: req.params._id});
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
  }
  
    async getAllContract(req: Request, res: Response) {
        const contract = await find();
        return res.status(200)
        .send({
            success: true,
            message: "All contracts fetched",
            contract: contract
        });
    }
}