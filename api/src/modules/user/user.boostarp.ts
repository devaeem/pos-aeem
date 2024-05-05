import { UserController } from './user.controller';
import { UserRepository } from './users.repository';
import { BaseMongooseRepository } from "../../lib/common/repository/mongoose";
import { v4 as Uuid } from "uuid";

// Define UserModel only once, either as interface or class
interface UserModel {
 id: string;
 username: string;
 email: string;
 password: string;
}


const userRepository = new UserRepository();
export const userController = new UserController(userRepository);
