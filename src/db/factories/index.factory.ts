import { userFactory } from './user.factory';

export async function runFactories() {
  return userFactory();
}
