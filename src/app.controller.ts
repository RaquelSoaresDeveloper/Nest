import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/HelloWord')
  getHelloWord(): string {
    return this.appService.getHelloWord();
  }
  @Get('/BSMs')
  getBSMs(): string {
    return this.appService.getBSMs();
  }
  @Get('/Objetivodeaprendizado')
  getObjetivodeaprendizado(): string {
    return this.appService.getObjetivodeaprendizado();
  }

}
