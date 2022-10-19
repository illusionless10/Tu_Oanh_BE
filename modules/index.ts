import config from '../config';
import mongodb from "./mongodb";
import env from "./env";

export default {
  initialize: async () => {
    const cfg = config.get();
    await env.init();
    await mongodb.connect(cfg);
  },
};
