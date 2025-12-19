import { FactoryProvider } from '@nestjs/common';
import knex from 'knex';
import { KNEX_CONNECTION } from './knex.constants';

export const knexProvider: FactoryProvider = {
  provide: KNEX_CONNECTION,
  useFactory: async () => {
    return knex({
      client: 'pg',
      connection: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
      searchPath: ['public'],
    });
  },
};
