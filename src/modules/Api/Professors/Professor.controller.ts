import { Controller, Get, Param } from '@nestjs/common';
import { ProfessorService } from './Professor.service';

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
}
