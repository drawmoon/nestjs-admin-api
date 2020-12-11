import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { APP_SERVICE } from './services/app.constant';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_SERVICE,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
