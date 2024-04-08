import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  getUser() {
    return 'This action returns a user';
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltRounds);

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    console.log('passwordHashed', passwordHashed);

    return user;
  }

  deleteUser() {
    return 'This action deletes a user';
  }

  editUser() {
    return 'This action edits a users data';
  }
}
