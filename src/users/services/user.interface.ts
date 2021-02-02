import { UserDTO } from '../dtos/user.dto';

export const USER_SERVICE = 'IUserService';

export interface IUserService {
  getAll(): UserDTO[];
}
