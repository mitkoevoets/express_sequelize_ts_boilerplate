import databaseConfig from './database';

export default {
  ...databaseConfig,
  ...{
    port: process.env.PORT,
  },
};
