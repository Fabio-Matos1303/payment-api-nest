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
import { UserService } from './user.service';
import { User } from './interface/user.interface';

@Controller('user')
export class UserController {
  // Services que serão usados nos verbos do controller
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return `This action returns the ${id}user`;
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUser);
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
