import { Sequelize } from 'sequelize-typescript';
import config from '../config';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.postgres.user,
  database: config.postgres.database,
  port: config.postgres.port,
  password: config.postgres.password,
  models: [__dirname + '/models'],
});
