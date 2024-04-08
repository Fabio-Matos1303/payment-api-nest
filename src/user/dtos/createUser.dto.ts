import { Role } from '../enum/Role';

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  role: Role;
}