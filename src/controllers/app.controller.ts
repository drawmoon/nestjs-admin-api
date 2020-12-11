import { Controller, Get, Inject } from '@nestjs/common';
import { IAppService } from '../services/app.interface';
import { APP_SERVICE } from '../services/app.constant';

@Controller()
export class AppController {
  constructor(
    @Inject(APP_SERVICE)
    private readonly appService: IAppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
