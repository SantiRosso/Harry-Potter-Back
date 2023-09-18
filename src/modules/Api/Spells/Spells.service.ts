import { InjectRepository } from '@nestjs/typeorm';
import { Spell } from './entities/Spells.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpellDto } from './dtos/create-spells.dto';
import { UpdateSpellDto } from './dtos/update-spells.dto';

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(Spell) private spellsRepository: Repository<Spell>,
  ) {}

  async findAll() {
    return await this.spellsRepository.find();
  }

  async findById(id: string) {
    const spellFound = await this.spellsRepository.find({
      where: {
        id,
      },
    });

    if (!spellFound) {
      return new HttpException('Spell not found', HttpStatus.NOT_FOUND);
    }

    return spellFound;
  }

  async create(createFields: CreateSpellDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }
    const newSpell = this.spellsRepository.create(createFields);
    return await this.spellsRepository.save(newSpell);
  }

  async update(id: string, updateFields: UpdateSpellDto) {
    const result = await this.spellsRepository.update({ id }, updateFields);

    if (result.affected === 0) {
      return new HttpException('Spell not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.spellsRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Spell not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
