import { prop, modelOptions, Severity, pre, post ,plugin} from "@typegoose/typegoose";
import { v4 as Uuid } from "uuid";
import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
type Uuid = string;
@modelOptions({
 schemaOptions: {
   _id: false,
   timestamps: true,
 }
})

@plugin(mongoosePaginate)
@plugin(aggregatePaginate)
export  class EntityBase {
 @prop({ required: true ,default: Uuid()})
  _id: string;

  @prop({ required: true, default: true })
  active?: boolean;

  @prop({ required: true, default: false })
  isdelete?: boolean;
}