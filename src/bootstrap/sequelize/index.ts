import _ from 'lodash';
import config from '../../config';
import { Sequelize } from 'sequelize-typescript';
import { importModels } from './importModels';
// import { syncModels } from './syncModels';
// import { associateModels } from './associateModels';

const db = {};

export const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.postgres.user,
  database: config.postgres.database,
  host: config.postgres.host,
  port: config.postgres.port,
  password: config.postgres.password,
  models: [__dirname + '/models/*.model.ts'],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

importModels(sequelize, db);
// syncModels(sequelize, db);
// associateModels(db);

module.exports = _.extend(
  {
    sequelize,
    Sequelize,
  },
  db,
);
