import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './entities/Professor.entity';
import { ProfessorService } from './Professor.service';
import { ProfessorController } from './Professor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  providers: [ProfessorService],
  controllers: [ProfessorController],
  exports: [],
})
export class ProfessorModule {}
