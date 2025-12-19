import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { KNEX_CONNECTION } from '../common/knex/knex.constants';
import { User } from '../models/user.model';
import { CreateUserDto } from '../models/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll(): Promise<User[]> {
    return this.knex('users').select('*');
  }

  async findOne(id: number): Promise<User> {
    return this.knex('users').where({ id }).first();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const [user] = await this.knex('users').insert(createUserDto).returning('*');
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.knex('users').where({ id }).del();
  }
}