import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/user/enum/Role';

@Controller('address')
export class AddressController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly addressService: AddressService) { }

  @Roles(Role.USER)
  @Post(':userId')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return await this.addressService.createAddress(createAddressDto, userId);
  }
}
