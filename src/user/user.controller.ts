import { Controller, Get, Inject } from '@nestjs/common';
import { IUserService } from './user.interface';
import { USER_SERVICE } from './user.constant';

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
