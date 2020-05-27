import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'post'
})
export class Post extends Model<Post> {
  @Column text!: string;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  // @ts-ignore
  user: User;
}
