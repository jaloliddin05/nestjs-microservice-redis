import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';
import { RedisOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(NotificationModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  } as RedisOptions);
  await app.listen();
}
bootstrap();
