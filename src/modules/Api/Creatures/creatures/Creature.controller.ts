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
import { CreatureService } from './Creature.service';
import { UpdateCreatureDto } from '../dtos/update-creature.dto';
import { CreateCreatureDto } from '../dtos/create-creature.dto';

@Controller('api/creatures')
export class CreatureController {
  constructor(private creatureService: CreatureService) {}

  @Get()
  async findAll(@Query('type') type: string) {
    const characters = type
      ? await this.creatureService.findByType(type)
      : await this.creatureService.findAll();
    return characters;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.creatureService.findById(id);
  }

  @Post()
  async create(@Body() createDto: CreateCreatureDto) {
    return await this.creatureService.create(createDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFields: UpdateCreatureDto,
  ) {
    return await this.creatureService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.creatureService.delete(id);
  }
}
