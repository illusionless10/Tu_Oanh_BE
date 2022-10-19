import {ObjectId} from "mongodb";

interface IMongoUser {
  _id: ObjectId;
  username: string;
  password: string;
}

export { IMongoUser };