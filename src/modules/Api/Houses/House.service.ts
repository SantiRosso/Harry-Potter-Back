import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from './entities/House.entity';
import { Repository } from 'typeorm';
import { CreateHouseDto } from './dtos/CreateHouse.dto';
import { UpdateHouseDto } from './dtos/UpdateHouse.dto';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
  ) {}

  async findAll() {
    return await this.houseRepository.find();
  }

  async findById(id: string) {
    const houseFound = await this.houseRepository.find({
      where: {
        id,
      },
    });

    if (!houseFound) {
      return new HttpException('House not found', HttpStatus.NOT_FOUND);
    }

    return houseFound;
  }

  async create(createFields: CreateHouseDto) {
    const newHouse = this.houseRepository.create(createFields);
    return await this.houseRepository.save(newHouse);
  }

  async update(id: string, updateFields: UpdateHouseDto) {
    const result = await this.houseRepository.update(id, updateFields);

    if (result.affected === 0) {
      return new HttpException('House not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.houseRepository.delete(id);

    if (result.affected === 0) {
      return new HttpException('House not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
