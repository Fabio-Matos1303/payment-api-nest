import { IsEmail, IsString } from 'class-validator';
import { Role } from '../enum/Role';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;
  role: Role;
}
