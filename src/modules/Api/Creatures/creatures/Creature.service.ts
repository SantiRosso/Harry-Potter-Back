import { Injectable } from '@nestjs/common';
import { Creature } from '../entities/Creature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class CreatureService {
  constructor(
    @InjectRepository(Creature)
    private creatureRepository: Repository<Creature>,
  ) {}
}
