import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getUserByIdWithRelations(userId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { id: userId },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) throw new NotFoundException(`User id ${userId} not found`);

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ email: email });
    if (!user) throw new NotFoundException(`User ${email} not found`);

    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltRounds);

    return this.userRepository.save({
      ...createUserDto,
      role: 1,
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
