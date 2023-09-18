import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { SpellService } from './Spells.service';
import { CreateSpellDto } from './dtos/create-spells.dto';
import { UpdateSpellDto } from './dtos/update-spells.dto';

@Controller('api/spells')
export class SpellController {
  constructor(private spellService: SpellService) {}

  @Get()
  async findAll() {
    return await this.spellService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.spellService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreateSpellDto) {
    return await this.spellService.create(createFields);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateSpellDto) {
    return await this.spellService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.spellService.delete(id);
  }
}
