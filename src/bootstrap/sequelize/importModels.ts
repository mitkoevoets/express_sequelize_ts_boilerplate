import path from "path";
import { Sequelize } from 'sequelize-typescript';

export function importModels(sequelize: Sequelize, db: {}) {
  const modelsDir = path.normalize(`${__dirname}/../../models`);

  sequelize.addModels([modelsDir]);
}
