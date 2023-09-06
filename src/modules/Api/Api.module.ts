import { Module } from '@nestjs/common/decorators';
import { CharacterModule } from './Characters/Character.module';
import { CreaturesModule } from './Creatures/creatures/Creature.module';

@Module({
  imports: [CharacterModule, CreaturesModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApiModule {}
