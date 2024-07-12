// src/models/user.model.ts

import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column
  phone: string;

  @Column({ allowNull: false })
  password: string;
}
