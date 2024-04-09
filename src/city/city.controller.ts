import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly cityService: CityService) { }

  @Get(':stateId')
  async getAllCitiesByStateId(
    @Param('stateId') stateId: number,
  ): Promise<CityEntity[]> {
    return await this.cityService.getAllCitiesByStateId(stateId);
  }
}
