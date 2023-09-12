import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './entities/Professor.entity';
import { ProfessorService } from './Professor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  providers: [ProfessorService],
  controllers: [],
  exports: [],
})
export class ProfessorModule {}
