import { Character } from './entities/Character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dtos/create-characters.dto';
import { UpdateCharacterDto } from './dtos/update-characters.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  //Listar todos los personajes
  async findAll() {
    return await this.characterRepository.find();
  }

  //Obtener un pj por ID
  async findById(id: string) {
    const characterFound = await this.characterRepository.find({
      where: {
        id,
      },
    });

    if (!characterFound) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return characterFound;
  }

  //Obtener todos los pj por casa
  async findByHouse(house: string) {
    const characterFound = await this.characterRepository.find({
      where: {
        house,
      },
    });

    if (!characterFound.length || characterFound instanceof HttpException) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return characterFound;
  }

  //Crear un pj nuevo
  async create(createCharacterDto: CreateCharacterDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }

    const newCharacter = this.characterRepository.create(createCharacterDto);
    return await this.characterRepository.save(newCharacter);
  }

  //Editar un pj
  async update(id: string, updateCharacterFields: UpdateCharacterDto) {
    const result = await this.characterRepository.update(
      { id },
      updateCharacterFields,
    );

    if (result.affected === 0) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  //Eliminar un pj
  async delete(id: string) {
    const result = await this.characterRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
