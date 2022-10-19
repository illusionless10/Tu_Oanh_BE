import {IMongoUser} from "./interface";
import mongodb from "../../../modules/mongodb";
import { ObjectId } from "mongodb";

const oneById = async (id: string): Promise<IMongoUser | null> => {
  const col = mongodb.userCol();

  try {
    return await col.findOne(
      { _id: new ObjectId(id) }
    ) as IMongoUser;
  } catch (err: unknown) {
    console.log('*** Error when find channel oneById', err);
    return null;
  }
}

export default {
  oneById,
}