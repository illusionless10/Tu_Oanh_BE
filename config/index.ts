import { IConfig } from "./interface";

const cfg: IConfig = {} as IConfig;

const get = (): IConfig => {
  return cfg;
};

export default {
  get,
};
