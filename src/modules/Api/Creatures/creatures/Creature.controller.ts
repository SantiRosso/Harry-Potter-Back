import {
  Controller,
  Get,
  Param,
  // Post,
  // Body,
  // Delete,
  Query,
  // Patch,
} from '@nestjs/common';
import { CreatureService } from './Creature.service';

@Controller('creatures')
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
}
