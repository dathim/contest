import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;
const corsOptions = {
  origin: [
      "http://localhost:5173",
      "http://127.0.0.0:5173",
  ],
};


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(port);
}

bootstrap().then(() => {
  console.log(`Backend start on port: ${port}`)
});
