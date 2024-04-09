import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entity/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    // eslint-disable-next-line prettier/prettier
  ) { }
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  getUser() {
    return 'This action returns a user';
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltRounds);

    return this.userRepository.save({
      ...createUserDto,
      password: passwordHashed,
    });
  }

  deleteUser() {
    return 'This action deletes a user';
  }

  editUser() {
    return 'This action edits a userRepository data';
  }
}
