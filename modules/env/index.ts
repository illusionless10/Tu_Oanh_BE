import config from "../../config";

const init = () => {
  mongodb();
  common();
};

const mongodb = () => {
  const cfg = config.get();
  cfg.mongodb = {
    uri: process.env.MONGODB_URI || '',
    database: process.env.MONGODB_DATABASE || '',
  };
};

const common = () => {
  const cfg = config.get();
  cfg.common = {
    port: Number(process.env.COMMON_PORT) || 10000,
    jwtSecret: process.env.COMMON_JWT_SECRET || '',
  };
};

export default {
  init,
}