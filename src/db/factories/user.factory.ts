import { User } from '../../models/user.model';

export function userFactory(db: any) {
  return User.bulkCreate([
    {
      firstName: 'idea',
    },
  ]);
}
