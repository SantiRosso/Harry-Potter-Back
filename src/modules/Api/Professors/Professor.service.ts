import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './entities/Professor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}

  async findAll() {
    return await this.professorRepository.find();
  }

  async findById(id: string) {
    return await this.professorRepository.find({
      where: {
        id,
      },
    });
  }
}
