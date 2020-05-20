import {Model, Column, Table, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column
  firstName!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
