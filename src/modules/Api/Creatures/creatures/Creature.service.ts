import { Creature } from '../entities/Creature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCreatureDto } from '../dtos/create-creature.dto';

@Injectable()
export class CreatureService {
  constructor(
    @InjectRepository(Creature)
    private creatureRepository: Repository<Creature>,
  ) {}

  async findAll() {
    return await this.creatureRepository.find();
  }

  async findById(id: string) {
    const creatureFound = await this.creatureRepository.find({
      where: {
        id,
      },
    });
    if (!creatureFound) {
      return new HttpException('Arrendatario not found', HttpStatus.NOT_FOUND);
    }

    return creatureFound;
  }

  async findByType(type: string) {
    const creatureFound = await this.creatureRepository.find({
      where: {
        type,
      },
    });

    if (!creatureFound.length || creatureFound instanceof HttpException) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return creatureFound;
  }

  async create(createCreatureDto: CreateCreatureDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }

    const newCreature = this.creatureRepository.create(createCreatureDto);
    return await this.creatureRepository.save(newCreature);
  }
}
