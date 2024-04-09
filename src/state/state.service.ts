import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async getAllStates(): Promise<StateEntity[]> {
    return this.stateRepository.find();
  }
}
