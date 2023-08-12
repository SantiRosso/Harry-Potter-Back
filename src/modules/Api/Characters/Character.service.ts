import { Injectable } from '@nestjs/common';
import { Character } from './entities/Character.entity';
import { createCharacterDto } from './dtos/create-caracters.dto';
import { v4 } from 'uuid';

@Injectable()
export class CharactersService {
  repository: Character[];

  constructor() {
    this.repository = [];
  }

  //Listar todos los personajes
  async findAll(): Promise<Character[]> {
    return this.repository;
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
  async create(createCharacterDto: createCharacterDto) {
    const { name, alive, house, age } = createCharacterDto;
    const newCharacter: Character = {
      id: v4(),
      name,
      alive,
      house,
      age,
    };
    this.repository.push(newCharacter);
    return newCharacter;
  }

  //Eliminar un pj
  async delete(id: string) {
    this.repository = this.repository.filter((char) => char.id !== id);
    return 'Character deleted succesfully';
  }
}
