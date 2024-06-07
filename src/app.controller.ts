import {
  Controller,
  Get,
  HttpCode,
  Header,
  Redirect,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  getHello(): string {
    return this.appService.getHello();
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
