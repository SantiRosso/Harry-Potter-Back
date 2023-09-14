import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProfessorService } from './Professor.service';
import { CreateProfessorDto } from './dtos/create-professors.dto';
import { UpdateProfessorDto } from './dtos/update-professors.dto';

@Controller('api/professors')
export class ProfessorController {
  constructor(private professorService: ProfessorService) {}

  @Get()
  async findAll() {
    return await this.professorService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.professorService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreateProfessorDto) {
    return await this.professorService.create(createFields);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFields: UpdateProfessorDto,
  ) {
    return await this.professorService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.professorService.delete(id);
  }
}
