import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/user/enum/Role';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('address')
export class AddressController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly addressService: AddressService) { }

  @Roles(Role.ADMIN)
  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    console.log(userId);
    return await this.addressService.createAddress(createAddressDto, userId);
  }

  @Get()
  getAllAddresses(@UserId() userId: number): void {
    console.log(userId);
  }
}
