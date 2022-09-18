import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { CustomLogger } from './logger/custom-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  const config = app.get(ConfigService);

  app.setGlobalPrefix('api');

  await app.listen(config.get('port'));
}
bootstrap();
