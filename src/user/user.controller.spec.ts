import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { APP_SERVICE } from './user.constant';

describe('AppController', () => {
  let appController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: APP_SERVICE,
          useClass: UserService,
        },
      ],
    }).compile();

    appController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
