import { Global, Module, OnApplicationShutdown, Inject } from '@nestjs/common';
import { knexProvider } from './knex.provider';
import { DbMigrationService } from './db-migration.service';
import { KNEX_CONNECTION } from './knex.constants';
import { Knex } from 'knex';

@Global()
@Module({
  providers: [knexProvider, DbMigrationService],
  exports: [knexProvider],
})
export class KnexModule implements OnApplicationShutdown {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async onApplicationShutdown() {
    await this.knex.destroy();
  }
}
