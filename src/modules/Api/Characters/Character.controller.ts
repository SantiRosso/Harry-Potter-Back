import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { CharactersService } from './Character.service';
import { CreateCharacterDto } from './dtos/create-characters.dto';
import { UpdateCharacterDto } from './dtos/update-characters.dto';

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
  async findById(@Param('id') id: string) {
    const character = await this.characterService.findById(id);
    return character;
  }

  @Post()
  async create(@Body() createDto: CreateCharacterDto) {
    return await this.characterService.create(createDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFields: UpdateCharacterDto,
  ) {
    return await this.characterService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.characterService.delete(id);
  }
}
