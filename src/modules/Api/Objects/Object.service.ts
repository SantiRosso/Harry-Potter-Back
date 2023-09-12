import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MagicObject } from './entities/Object.entity';
import { Repository } from 'typeorm';
import { CreateObjectDto } from './dtos/create-objects.dto';
import { UpdateObjectDto } from './dtos/update-objects.dto';

@Injectable()
export class ObjectsService {
  constructor(
    @InjectRepository(MagicObject)
    private objectRepository: Repository<MagicObject>,
  ) {}

  async findAll() {
    return await this.objectRepository.find();
  }

  async findByName(name: string) {
    const objectFound = await this.objectRepository.find({
      where: {
        name,
      },
    });

    if (!objectFound) {
      return new HttpException('Object not found', HttpStatus.NOT_FOUND);
    }

    return objectFound;
  }

  async create(createObjectDto: CreateObjectDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }
    const newObject = this.objectRepository.create(createObjectDto);
    return await this.objectRepository.save(newObject);
  }

  async update(id: string, updateObjectFields: UpdateObjectDto) {
    const result = await this.objectRepository.update(
      { id },
      updateObjectFields,
    );

    if (result.affected === 0) {
      return new HttpException('Object not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.objectRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Object not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
