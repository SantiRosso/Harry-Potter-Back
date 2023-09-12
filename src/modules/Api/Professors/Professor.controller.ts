import { Controller } from '@nestjs/common';
import { ProfessorService } from './Professor.service';

@Controller('api/professors')
export class ProfessorController {
  constructor(private professorService: ProfessorService) {}
}
