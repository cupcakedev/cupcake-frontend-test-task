import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cupcake currency API')
    .setDescription('The Cupcake currency API for test task')
    .setVersion('1.0')
    .addServer('/api/v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}
bootstrap();
