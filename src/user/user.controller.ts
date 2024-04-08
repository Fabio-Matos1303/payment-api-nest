import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return 'This action returns all users';
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return `This action returns the ${id}user`;
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return createUser;
  }

  @Delete(':id')
  async deleteUser() {
    return 'This action creates a user';
  }

  @Put(':id')
  async editUser() {
    return 'This action edits a users data';
  }
}
