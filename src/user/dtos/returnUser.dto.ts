import { UserEntity } from '../entity/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  role: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.cpf = user.cpf;
    this.role = user.role;
  }
}
