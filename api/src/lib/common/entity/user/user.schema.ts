import {
 prop,
 modelOptions,
 Severity,
} from "@typegoose/typegoose";
import { EntityBase } from "../EntityBase";


@modelOptions({
 schemaOptions: {
   collection: "users",
 }
})
export  class User extends EntityBase {
 @prop({ required: true })
 name: string;
}



