import { Injectable } from '@nestjs/common';
import IUser from '../domain/interfaces/IUsers';

@Injectable()
export class UsersServices {
  getAll(): IUser[] {
    return [];
  }

  getById(id:string): IUser {
    return {} as IUser;
  }

  create(user: IUser): IUser {
    return user;
  }

  updateById(id: string,user: IUser): IUser {
    return user;
  }

  deleteById(id: string): string {
    return `User with id ${id} deleted`;
  }

}
