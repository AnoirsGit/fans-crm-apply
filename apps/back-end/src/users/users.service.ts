// src/users.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entitiy';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userModel: typeof User,
  ) {}

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async update(id: number, user: User): Promise<[number, User[]]> {
    const [affectedCount, updatedUsers] = await this.userModel.update(user, {
      where: { id },
      returning: true, // Ensures Sequelize returns the updated instances
    });
    return [affectedCount, updatedUsers];
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
