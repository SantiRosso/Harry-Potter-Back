import { Module } from '@nestjs/common/decorators';
import { CharacterModule } from './Characters/Character.module';
import { CreaturesModule } from './Creatures/creatures/Creature.module';
import { TextbookModule } from './Textbooks/Textbooks.module';

@Module({
  imports: [CharacterModule, CreaturesModule, TextbookModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApiModule {}
