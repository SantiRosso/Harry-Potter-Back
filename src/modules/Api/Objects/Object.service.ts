import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MagicObject } from './entities/Object.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObjectsService {
  constructor(
    @InjectRepository(MagicObject)
    private objectRepository: Repository<MagicObject>,
  ) {}
}
