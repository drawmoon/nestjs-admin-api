import { Controller, Get, Inject } from '@nestjs/common';
import { IUserService, USER_SERVICE } from './user.interface';

@Controller()
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly appService: IUserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
