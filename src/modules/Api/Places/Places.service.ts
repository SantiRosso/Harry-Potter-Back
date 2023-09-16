import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './entities/Place.entity';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dtos/create-places.dto';
import { UpdatePlaceDto } from './dtos/update-places.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place) private placeRepository: Repository<Place>,
  ) {}

  async findAll() {
    return await this.placeRepository.find();
  }

  async findById(id: string) {
    return await this.placeRepository.find({
      where: {
        id,
      },
    });
  }

  async create(createFields: CreatePlaceDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }
    const newPlace = this.placeRepository.create(createFields);
    return await this.placeRepository.save(newPlace);
  }

  async update(id: string, updateFields: UpdatePlaceDto) {
    const placeFound = await this.placeRepository.update({ id }, updateFields);

    if (!placeFound) {
      return new HttpException('Place not found', HttpStatus.NOT_FOUND);
    }

    return placeFound;
  }

  async delete(id: string) {
    return await this.placeRepository.delete({ id });
  }
}
