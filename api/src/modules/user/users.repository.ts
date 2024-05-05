

import { BaseMongooseRepository } from "../../lib/common/repository/mongoose";
import { UserModel ,User } from "../../lib/common/entity/user";
import { IPagination } from "../../lib/core/response";
import { ListUserDto } from "./dto/list.dto";

export class UserRepository extends BaseMongooseRepository<User> {

  constructor() {
    super(User);
  }
  async getAll(data:ListUserDto):Promise<IPagination<User>>  {
    // console.log('data', data)
      return await this.listPaga(data);
  }
//   async getAll() {x
//     return await this.list();
//  }

  async createUser(dto:any) {
    return this.create(dto);
  }
}
