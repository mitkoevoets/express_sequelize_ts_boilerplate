import { userFactory } from './user.factory';

export function runFactories(db: any) {
  return userFactory(db);
}
