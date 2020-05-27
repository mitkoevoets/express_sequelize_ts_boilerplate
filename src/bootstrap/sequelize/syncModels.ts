import { runFactories } from '../../db/factories/index.factory';
import { Sequelize } from 'sequelize-typescript';

export function syncModels(sequelize: Sequelize, db: {}) {
  return sequelize.sync({ force: true })
    .then(() => runFactories(db))
    .then(() => {
      console.log(`Database & tables created!`);
    });
}
