import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './entities/Professor.entity';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dtos/create-professors.dto';
import { UpdateProfessorDto } from './dtos/update-professors.dto';

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
    const professorFound = await this.professorRepository.find({
      where: {
        id,
      },
    });

    if (!professorFound) {
      return new HttpException('Professor not found', HttpStatus.NOT_FOUND);
    }

    return professorFound;
  }

  async create(createFields: CreateProfessorDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }
    const newProfessor = this.professorRepository.create(createFields);
    return await this.professorRepository.save(newProfessor);
  }

  async update(id: string, updateFields: UpdateProfessorDto) {
    const result = await this.professorRepository.update({ id }, updateFields);

    if (result.affected === 0) {
      return new HttpException('Professor not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.professorRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Professor not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
