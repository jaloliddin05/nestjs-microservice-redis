import { NestFactory } from '@nestjs/core';
import { Transport, RedisOptions } from '@nestjs/microservices';

import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  } as RedisOptions);
  await app.listen();
}
bootstrap();
