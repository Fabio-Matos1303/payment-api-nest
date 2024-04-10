import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';

@Module({
  providers: [AddressService],
  controllers: [AddressController],
  imports: [TypeOrmModule.forFeature([AddressEntity])],
})

// eslint-disable-next-line prettier/prettier
export class AddressModule { }
