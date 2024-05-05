
import { getModelForClass } from '@typegoose/typegoose';
import { User } from './user.schema';

export const UserModel = getModelForClass(User);