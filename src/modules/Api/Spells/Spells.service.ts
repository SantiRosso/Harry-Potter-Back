import { InjectRepository } from '@nestjs/typeorm';
import { Spell } from './entities/Spells.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(Spell) private spellsRepository: Repository<Spell>,
  ) {}
}
