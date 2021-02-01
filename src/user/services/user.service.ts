import { Injectable } from '@nestjs/common';
import { UserDTO } from '../dtos/user.dto';
import { User } from '../entities/user';
import { Mapper } from '../mappers/mapper';
import { IUserService } from './user.interface';

@Injectable()
export class UserService implements IUserService {
  getAll(): UserDTO[] {
    const users: User[] = [
      {
        id: 1,
        username: 'drsh',
        email: '1340260725@qq.com',
        password: '123',
        a1: 'a1',
      }
    ];
    return Mapper.mapArray(users, UserDTO, User);
  }
}
