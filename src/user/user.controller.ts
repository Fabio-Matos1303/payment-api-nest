import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return 'This action returns all users';
  }
}
