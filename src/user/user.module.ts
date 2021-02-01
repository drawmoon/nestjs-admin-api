import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './services/user.service';
import { USER_SERVICE } from './services/user.interface';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: USER_SERVICE,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
