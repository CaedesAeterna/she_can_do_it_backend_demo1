import { Inject, Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Knex } from 'knex';
import { KNEX_CONNECTION } from './knex.constants';

@Injectable()
export class DbMigrationService implements OnModuleInit {
  private readonly logger = new Logger(DbMigrationService.name);

  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async onModuleInit() {
    this.logger.log('Checking database schema...');
    await this.createUsersTable();
    await this.createTasksTable();
    this.logger.log('Database schema check complete.');
  }

  private async createUsersTable() {
    const exists = await this.knex.schema.hasTable('users');
    if (!exists) {
      this.logger.log('Creating users table...');
      await this.knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('first_name');
        table.string('last_name');
        table.timestamp('created_at').defaultTo(this.knex.fn.now());
      });
    }
  }

  private async createTasksTable() {
    const exists = await this.knex.schema.hasTable('tasks');
    if (!exists) {
      this.logger.log('Creating tasks table...');
      await this.knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description');
        table.string('status').defaultTo('pending');
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(this.knex.fn.now());
      });
    }
  }
}
