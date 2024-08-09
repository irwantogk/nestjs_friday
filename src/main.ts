import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import { CustomResponseInterceptor } from './common/interceptor/tramsform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new CustomResponseInterceptor());
  await app.listen(3000, () => log(`Server running on port 3000`));
}
bootstrap();
