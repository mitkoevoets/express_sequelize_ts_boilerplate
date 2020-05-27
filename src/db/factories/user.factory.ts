import { User } from '../../models/user.model';

export function userFactory(db: any) {
  return User.bulkCreate([
    {
      firstName: 'idea',
    },
  ]).catch(function(err) {
    // print the error details
    console.log(err);
  });
}
