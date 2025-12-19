import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function generateSwagger() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('She Can Do It API')
    .setDescription('The She Can Do It API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./docs/swagger.json', JSON.stringify(document, null, 2));
  console.log('Swagger JSON generated at ./docs/swagger.json');
  
  await app.close();
}
generateSwagger();
