import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressEntity } from './entities/address.entity';
import { CreateAddressDto } from './dtos/createAdress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async createAddress(createAddressDto: CreateAddressDto, userId: number) {
    await this.userService.findUserById(userId);
    await this.cityService.getCityById(createAddressDto.cityId);

    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }
}
