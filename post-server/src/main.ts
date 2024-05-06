import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { RedisOptions, TcpOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PostModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  } as RedisOptions);
  await app.listen();
}
bootstrap();
