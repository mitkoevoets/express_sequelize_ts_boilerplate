import path from "path";

export function importModels(sequelize: any, db: any) {
  const modelsDir = path.normalize(`${__dirname}/../../models`);

  sequelize.addModels([modelsDir]);
}
