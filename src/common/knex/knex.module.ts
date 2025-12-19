import { Global, Module } from '@nestjs/common';
import { knexProvider } from './knex.provider';
import { DbMigrationService } from './db-migration.service';

@Global()
@Module({
  providers: [knexProvider, DbMigrationService],
  exports: [knexProvider],
})
export class KnexModule {}
