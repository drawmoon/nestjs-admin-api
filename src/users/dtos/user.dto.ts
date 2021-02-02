import { AutoMap } from '@automapper/classes';

export class UserDTO {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  password: string;

  @AutoMap()
  a2: string;
}
