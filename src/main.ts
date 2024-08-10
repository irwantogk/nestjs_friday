import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import { CustomResponseInterceptor } from './common/interceptor/tramsform.interceptor';
import { appConfig } from './config/app.config';
import { SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());

  app.useGlobalInterceptors(new CustomResponseInterceptor());

  if (appConfig.environment === 'development') {
    const document = SwaggerModule.createDocument(app, appConfig.documentation);
    SwaggerModule.setup('openapi', app, document);
  }

  const port = appConfig.port;
  await app.listen(port, () => log(`Server running on port ${port}`));
}
bootstrap();
