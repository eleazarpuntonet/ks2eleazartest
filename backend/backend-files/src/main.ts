import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina automáticamente propiedades no definidas en los DTOs
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas en los DTOs
    transform: true, // Transforma los parámetros según sus tipos
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  app.enableCors({
    origin: '*', // Origen permitido (la URL de tu frontend)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas enviar cookies
  });


  await app.listen(3000);
}
bootstrap();
