// import { runFactories } from '../../db/factories/index.factory';
import { Sequelize } from 'sequelize-typescript';

export function syncModels(sequelize: Sequelize, db: {}) {
  sequelize.sync({ force: true })
    // .then(() => runFactories(db))
    .then(() => {
      console.log(`Database & tables created!`);
    }).catch(function(err) {
    // print the error details
    console.log('err');
    console.log(err);
  });
}
