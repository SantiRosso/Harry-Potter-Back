import { Character } from './entities/Character.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { /* HttpException, HttpStatus, */ Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dtos/create-caracters.dto';

@Injectable()
export class CharactersService {
  repository: Character[];

  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  //Listar todos los personajes

  async findAll() {
    return await this.characterRepository.find();
  }

  //Obtener un pj por ID
  async findById(id: string): Promise<Character> {
    return this.repository.find((char) => char.id === id);
  }

  //Obtener todos los pj por casa
  async findByHouse(house: string): Promise<Character[]> {
    return this.repository.filter((char) => char.house === house);
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
  // async create(createCharacterDto: createCharacterDto) {
  //   const { name, alive, house, age } = createCharacterDto;
  //   const newCharacter: Character = {
  //     id: v4(),
  //     name,
  //     alive,
  //     house,
  //     age,
  //   };
  //   this.repository.push(newCharacter);
  //   return newCharacter;
  // }

  //Eliminar un pj
  async delete(id: string) {
    this.repository = this.repository.filter((char) => char.id !== id);
    return 'Character deleted succesfully';
  }
}
