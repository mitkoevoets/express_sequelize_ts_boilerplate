import './bootstrap/env';
import config from './config';
import { app } from './bootstrap/express';
import { sequelize } from './bootstrap/sequelize';
import { createServer } from 'http';
import { runFactories } from './db/factories/index.factory';

(async () => {
  await sequelize.sync({force: true});
  runFactories()


  createServer(app)
    .listen(
      config.port,
      () => console.info('\x1b[33m%s\x1b[0m' ,`[cobra] server started on port ${config.port}`)
    );
})();
