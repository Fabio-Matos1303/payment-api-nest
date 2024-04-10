import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  // Services que serão usados nos verbos do controller
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAllUsers(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUsers()).map(
      (UserEntity) => new ReturnUserDto(UserEntity),
    );
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<ReturnUserDto> {
    return await this.userService.findUserById(+id);
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
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
