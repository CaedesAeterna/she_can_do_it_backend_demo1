import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { KNEX_CONNECTION } from '../common/knex/knex.constants';
import { Task } from '../models/task.model';
import { CreateTaskDto } from '../models/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll(): Promise<Task[]> {
    return this.knex('tasks').select('*');
  }

  async findOne(id: number): Promise<Task> {
    return this.knex('tasks').where({ id }).first();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const [task] = await this.knex('tasks').insert(createTaskDto).returning('*');
    return task;
  }

  async remove(id: number): Promise<void> {
    await this.knex('tasks').where({ id }).del();
  }
}
