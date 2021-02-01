import { AutoMap } from "@automapper/classes";

export class User {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  password: string;

  @AutoMap()
  a1: string;
}