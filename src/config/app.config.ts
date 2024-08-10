import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Friday Documentation')
  .setDescription('Api documentation for friday')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    },
    'accessToken',
  )
  .setVersion('0.0')
  .addTag('Friday')
  .build();

export const appConfig = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  documentation: swaggerConfig,
};
