import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: { name: string; email: string }): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.getUserById(Number(id));
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userData: { name?: string; email?: string }): Promise<UserModel> {
    return this.userService.updateUser(Number(id), userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser(Number(id));
  }
}
