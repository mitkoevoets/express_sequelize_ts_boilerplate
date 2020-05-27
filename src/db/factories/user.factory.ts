import { User } from '../../models/user.model';
import { Post } from '../../models/post.model';

export async function userFactory() {
  const user = await User.create({ firstName: 'idea' });
  await Post.create({ text: 'Lorem Ipsum', userId: user.id })
}
