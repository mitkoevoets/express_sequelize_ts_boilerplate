import { Sequelize } from 'sequelize';
import _ from 'lodash';
import config from '../../config';
// import { importModels } from './importModels';
// import { syncModels } from './syncModels';
// import { associateModels } from './associateModels';

const db = {};

const sequelize = new Sequelize(
  config.postgres.database,
  config.postgres.user,
  config.postgres.password,
  {
    dialect: 'postgres',
    port: config.postgres.port,
    host: config.postgres.host,
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

// importModels(sequelize, db);
// syncModels(sequelize, db);
// associateModels(db);

module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db,
);
