import { getModelForClass, DocumentType } from "@typegoose/typegoose";
import { ClientSession } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
import { IPagination } from "../../core/response";
import { ListUserDto } from "../../../modules/user/dto/list.dto";
export class BaseMongooseRepository<T> {
  protected model: any;
  protected session?: ClientSession;

  constructor(private t: new () => T) {
    this.model = getModelForClass(t);
    this.model.schema.plugin(mongoosePaginate);
    this.model.schema.plugin(aggregatePaginate);
  }

  async list() {
    return this.model.find();
  }
  async listPaga(data: ListUserDto): Promise<IPagination<T>> {





    const customLabels = {
      totalDocs: "total",
      docs: "rows",
      limit: "pageSize",
      page: "page",
    };

    const options = {
      limit: data.pageSize,
      page: data.page,
      customLabels: customLabels,
      // lean: true,
    };

    // const query = this.model.find(data.query);


    //  return query.paginate({}, { ...options, customLabels });
    return this.model
      .paginate({}, options)
      .then((result:any) => {
        return result
      });
  }

  async create(item: T[]): Promise<T[]> {
    const res: T[] = await this.model.create([item]);

    const resCreate: any = res[0];

    return resCreate.toObject();
  }

  // Additional methods like update, delete, etc. can be added similarly
}
