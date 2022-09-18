import AppModule from './app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const port = process.env.PORT || 3000;

  await app.listen(port);
}

bootstrap();
