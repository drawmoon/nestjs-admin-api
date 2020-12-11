import { Injectable } from '@nestjs/common';
import { IAppService } from './app.interface';

@Injectable()
export class AppService implements IAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
