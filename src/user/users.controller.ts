import { Controller, Get, Inject } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { IUserService, USER_SERVICE } from './services/user.interface';

@Controller('api/users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  @Get()
  getAll(): UserDTO[] {
    return this.userService.getAll();
  }
}
