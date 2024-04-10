import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressEntity } from './entities/address.entity';
import { CreateAddressDto } from './dtos/createAdress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async createAddress(createAddressDto: CreateAddressDto, userId: number) {
    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }
}
