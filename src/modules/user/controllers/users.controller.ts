import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersServices } from '../services/users.service';
import IUsers from '../domain/interfaces/IUsers';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersServices) {}
  @Get()
  getAll(): IUsers[] {
    return this.UsersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): IUsers {
    return this.UsersService.getById(id)
  } 

  @Post()
  createUser(@Body() user: IUsers ): IUsers {
    return this.UsersService.create(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: IUsers): IUsers {
    return this.UsersService.updateById(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.UsersService.deleteById(id);
  }
}
