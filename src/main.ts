import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { getConfig } from './utils';

export const config = getConfig();
const PORT = config.PORT || 3000;
const PREFIX = config.PREFIX || '/';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  // app.useStaticAssets('public'); //配置静态资源http://localhost:3000/header.jpg
  app.useStaticAssets('public', {
    prefix: '/static/',
  }); //http://localhost:3000/static/header.jpg

  //模版引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  //允许跨域请求
  app.enableCors();

  // 给请求添加prefix
  app.setGlobalPrefix(PREFIX);

  await app.listen(PORT, () => {
    console.log(
      `服务已经启动,接口请访问:http://wwww.localhost:${PORT}/${PREFIX}`,
    );
  });
}
bootstrap();
