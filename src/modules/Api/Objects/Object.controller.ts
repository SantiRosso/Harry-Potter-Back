import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ObjectsService } from './Object.service';
import { CreateObjectDto } from './dtos/create-objects.dto';
import { UpdateObjectDto } from './dtos/update-objects.dto';

@Controller('api/objects')
export class ObjectsController {
  constructor(private objectsService: ObjectsService) {}

  @Get()
  async findAll(@Query('name') name: string) {
    const objects = name
      ? await this.objectsService.findByName(name)
      : await this.objectsService.findAll();
    return objects;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.objectsService.findById(id);
  }

  @Post()
  async create(@Body() createDto: CreateObjectDto) {
    return await this.objectsService.create(createDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateObjectDto) {
    return await this.objectsService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.objectsService.delete(id);
  }
}
