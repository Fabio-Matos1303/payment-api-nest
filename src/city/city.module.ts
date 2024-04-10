import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '../cache/cache.module';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports: [TypeOrmModule.forFeature([CityEntity]), CacheModule],
  exports: [CityService],
})

// eslint-disable-next-line prettier/prettier
export class CityModule { }
