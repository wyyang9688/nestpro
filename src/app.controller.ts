import {
  Controller,
  Get,
  HttpCode,
  Header,
  Redirect,
  Query,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private ConfigService: ConfigService,
  ) {}

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @Render('default/index')
  getHello(): object {
    console.log('getHello');
    console.log(this.ConfigService.get('PORT'));
    // this.ConfigService.set('PORT', 3000);
    console.log(this.ConfigService.get('PORT'));
    console.log(this.ConfigService.get('datasource.driverName'));
    return {
      name: '王二',
      age: 33,
    };
  }

  @Get('redirect')
  @Redirect('test', 302)
  redirect(@Query('version') version) {
    console.log(version);
  }

  @Get('test')
  getTest(): string {
    return this.appService.getTest();
  }
}
