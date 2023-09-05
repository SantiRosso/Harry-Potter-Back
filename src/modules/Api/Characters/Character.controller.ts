import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { CharactersService } from './Character.service';
import { Character } from './entities/Character.entity';
import { CreateCharacterDto } from './dtos/create-caracters.dto';

@Controller('api/characters')
export class CharactersController {
  constructor(private characterService: CharactersService) {}

  @Get()
  async findAll(@Query('house') house: string) {
    const characters = house
      ? await this.characterService.findByHouse(house)
      : await this.characterService.findAll();
    return characters;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Character> {
    const character: Character = await this.characterService.findById(id);
    return character;
  }

  @Post()
  async create(@Body() createDto: CreateCharacterDto) {
    return await this.characterService.create(createDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.characterService.delete(id);
  }
}
