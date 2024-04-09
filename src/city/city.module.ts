import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports: [
    CacheModule.register({
      ttl: 3600,
    }),
    TypeOrmModule.forFeature([CityEntity]),
  ],
})

// eslint-disable-next-line prettier/prettier
export class CityModule { }
