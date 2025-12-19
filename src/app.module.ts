import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from './common/knex/knex.module';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';

@Module({
  imports: [KnexModule],
  controllers: [AppController, UsersController, TasksController],
  providers: [AppService, UsersService, TasksService],
})
export class AppModule {}
