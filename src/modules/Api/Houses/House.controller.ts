import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { HouseService } from './House.service';
import { CreateHouseDto } from './dtos/CreateHouse.dto';
import { UpdateHouseDto } from './dtos/UpdateHouse.dto';

@Controller('api/houses')
export class HouseController {
  constructor(private houseService: HouseService) {}

  @Get()
  async findAll() {
    return await this.houseService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.houseService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreateHouseDto) {
    return await this.houseService.create(createFields);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateHouseDto) {
    return await this.houseService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.houseService.delete(id);
  }
}
