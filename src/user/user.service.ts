import { Injectable } from '@nestjs/common';
import { IUserService } from './user.interface';

@Injectable()
export class UserService implements IUserService {
  getHello(): string {
    return 'Hello World!';
  }
}
