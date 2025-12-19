import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { TasksService } from '../src/services/tasks.service';
import { UsersService } from '../src/services/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);
  const tasksService = app.get(TasksService);

  console.log('Seeding database...');

  try {
    // Create Users
    const alice = await usersService.create({
      email: 'alice.doe@example.com',
      password: 'password123',
      first_name: 'Alice',
      last_name: 'Doe',
    });
    console.log(`Created user: ${alice.first_name}`);

    const bob = await usersService.create({
      email: 'bob.builder@example.com',
      password: 'securepass',
      first_name: 'Bob',
      last_name: 'Builder',
    });
    console.log(`Created user: ${bob.first_name}`);

    // Create Tasks for Alice
    await tasksService.create({
      title: 'Buy Milk',
      description: 'Go to the store and buy milk',
      user_id: alice.id,
    });
    await tasksService.create({
      title: 'Walk the Dog',
      description: 'Take the dog for a walk in the park',
      user_id: alice.id,
    });
    
    // Create Tasks for Bob
    await tasksService.create({
      title: 'Fix the Roof',
      description: 'Repair the leak in the roof',
      user_id: bob.id,
    });

    console.log('Seeding complete!');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
