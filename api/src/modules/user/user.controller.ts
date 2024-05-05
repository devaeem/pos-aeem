import type { Response, Request } from "express";
import { UserRepository } from "./users.repository";
import { validationResult } from "express-validator";
import { BaseController, ro } from "../../lib/core";
import { BaseResponse } from "../../lib/core/response";
import { User } from "../../lib/common/entity";



export interface UserModel {
  page: string;
  pageSize: Number;
  email: string;
  password: string;
}

// extends BaseController
export class UserController extends BaseController {

  constructor(private userRepository: UserRepository) {
    super();
  }
  //: Promise<BaseResponse<UserModel[]>>

  async getAll(req: Request, res: Response):Promise<BaseResponse<UserModel>> {



if(!req.query.page ){
  ro(!req.query.page);
  // res.status(400).json({ message: {
  //   statuscode: 400,
  //   params: 'page',
  //   message: 'page must be is required'
  // } });
}
if(!req.query.pageSize ){
  ro(!req.query.pageSize);
  // res.status(400).json({ message: 'pageSize is required' });
}


    const dto= {
      page: Number(req.query.page),
      pageSize: Number(req.query.pageSize),
    }

     return { data: await this.userRepository.getAll(dto)}

  }

  async createUser(req: Request, res: Response):Promise<BaseResponse<UserModel>> {

    const dd= req.body
    return {data:await this.userRepository.createUser(dd)}

 }



}
