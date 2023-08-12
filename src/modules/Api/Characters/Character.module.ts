import { Module } from '@nestjs/common';
import { CharactersService } from './Character.service';
import { CharactersController } from './Character.controller';

@Module({
  imports: [],
  providers: [CharactersService],
  controllers: [CharactersController],
  exports: [],
})
export class CharacterModule {}
