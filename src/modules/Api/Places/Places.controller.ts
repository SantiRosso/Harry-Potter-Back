import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlacesService } from './Places.service';
import { CreatePlaceDto } from './dtos/create-places.dto';
import { UpdatePlaceDto } from './dtos/update-places.dto';

@Controller('api/places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get()
  async findAll() {
    return await this.placesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.placesService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreatePlaceDto) {
    return await this.placesService.create(createFields);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdatePlaceDto) {
    return await this.placesService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.placesService.delete(id);
  }
}
