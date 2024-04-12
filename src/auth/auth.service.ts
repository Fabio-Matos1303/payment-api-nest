import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dtos/login.dto';
import { compare } from 'bcrypt';

@Injectable()
// eslint-disable-next-line prettier/prettier
export class AuthService {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userService: UserService) { }

  async login(loginDto: LoginDto): Promise<UserEntity> {
    const user = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => null);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException(`User ${loginDto.email} not found`);
    }

    return user;
  }
}
