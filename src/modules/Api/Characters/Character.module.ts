import { Module } from '@nestjs/common';
import { CharactersService } from './Character.service';
import { CharactersController } from './Character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/Character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  providers: [CharactersService],
  controllers: [CharactersController],
  exports: [],
})
export class CharacterModule {}
