import { userFactory } from './user.factory';

export async function runFactories() {
  await userFactory();

  console.info('\x1b[33m%s\x1b[0m', 'Finished running db factories')
}
