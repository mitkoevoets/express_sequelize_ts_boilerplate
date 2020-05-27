import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { BuildOptions } from 'sequelize';

@Table({
  tableName: 'post'
})
export class Post extends Model<Post> {
  @Column text!: string;
  @ForeignKey(() => User) @Column userId!: number;
  @BelongsTo(() => User) user: User;

  constructor(values: object, options: BuildOptions, text: string, userId: number, user: User) {
    super(values, options);
    this.text = text;
    this.userId = userId;
    this.user = user;
  }
}
