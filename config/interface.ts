interface IConfig {
  common: IConfigCommon;
  mongodb: IConfigMongoDB;
  meili: IConfigMeili;
}

interface IConfigCommon {
  port: number;
  jwtSecret: string;
}

interface IConfigMongoDB {
  uri: string;
  port?: number;
  username?: string;
  password?: string;
  database: string;
  synchronize?: boolean;
  logging?: boolean;
  useUnifiedTopology?: boolean;
  useNewUrlParser?: boolean;
}

interface IConfigMeili {
  uri: string;
  apiKey: string;
}

export { IConfig };