import { Module } from '@nestjs/common/decorators';
import { CharacterModule } from './Characters/Character.module';
import { CreaturesModule } from './Creatures/creatures/Creature.module';
import { TextbookModule } from './Textbooks/Textbooks.module';
import { ObjectModule } from './Objects/Object.module';
import { ProfessorModule } from './Professors/Professor.module';
import { PlacesModule } from './Places/Places.module';
import { SpellModule } from './Spells/Spells.module';

@Module({
  imports: [
    CharacterModule,
    CreaturesModule,
    TextbookModule,
    ObjectModule,
    ProfessorModule,
    PlacesModule,
    SpellModule,
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApiModule {}
