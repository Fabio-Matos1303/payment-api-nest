import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';

@Controller('state')
export class StateController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly stateService: StateService) { }

  @Get()
  async getAllStates(): Promise<StateEntity[]> {
    return this.stateService.getAllStates();
  }
}
