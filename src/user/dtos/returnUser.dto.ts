import { ReturnAddressDto } from 'src/address/dtos/returnAddress.dto';
import { UserEntity } from '../entity/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  role: number;
  addresses?: ReturnAddressDto[];

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.cpf = user.cpf;
    this.role = user.role;
    this.addresses = user.addresses?.map(
      (address) => new ReturnAddressDto(address),
    );
  }
}
