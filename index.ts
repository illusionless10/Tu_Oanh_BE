import express from 'express';
import routes from './server/routes';
import modules from './modules';
import config from './config';

const init = async () => {
  const app = express();

  // Init modules
  await modules.initialize();

  // Routesb
  routes(app);

  const cfg = config.get();

  // Run
  app.listen(cfg.common.port, () => {
    console.log(`⚡️[server]: Server is running on port ${cfg.common.port}`);
  });
};

init().then();
