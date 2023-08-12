import { Module } from '@nestjs/common/decorators';
import { CharacterModule } from './Characters/Character.module';

@Module({
  imports: [CharacterModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApiModule {}
