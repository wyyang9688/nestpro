import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  // app.useStaticAssets('public'); //配置静态资源http://localhost:3000/header.jpg
  app.useStaticAssets('public', {
    prefix: '/static/',
  }); //http://localhost:3000/static/header.jpg
  await app.listen(3000);
}
bootstrap();
