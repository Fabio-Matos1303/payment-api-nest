import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAdress.dto';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly addressService: AddressService) { }

  @Post(':userId')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return await this.addressService.createAddress(createAddressDto, userId);
  }
}