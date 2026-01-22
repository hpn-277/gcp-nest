import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cloud Run uses PORT env variable (defaults to 8080)
  const port = process.env.PORT || 8080;

  // Must listen on 0.0.0.0, not localhost
  await app.listen(port, '0.0.0.0');
  console.log(`Application running on port ${port}`);
}
bootstrap();
