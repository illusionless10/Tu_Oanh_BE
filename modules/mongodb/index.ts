import {Collection, Db, MongoClient} from 'mongodb';
import { IConfig } from "../../config/interface";

let db: Db;
let mongoClient: MongoClient;

const connect = async (cfg: IConfig) => {
  // Connect
  try {
    const client = new MongoClient(cfg.mongodb.uri);
    mongoClient = await client.connect();
    console.log(`⚡️[mongodb]: connected`);

    db = client.db(cfg.mongodb.database);
  } catch (err) {
    console.log('err when connected to database mongodb', err);
    process.exit(1);
  }
};

const userCol = (): Collection => {
  return db.collection('users');
}

const productCol = (): Collection => {
  return db.collection('products');
}

export default {
  connect,
  userCol,
  productCol,
};
