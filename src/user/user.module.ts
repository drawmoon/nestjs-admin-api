import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER_SERVICE } from './user.constant';

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
