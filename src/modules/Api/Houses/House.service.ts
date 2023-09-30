import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from './entities/House.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
  ) {}
}
