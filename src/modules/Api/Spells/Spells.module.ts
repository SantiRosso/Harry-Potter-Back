import { Module } from '@nestjs/common/decorators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spell } from './entities/Spells.entity';
import { SpellService } from './Spells.service';
import { SpellController } from './Spells.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  providers: [SpellService],
  controllers: [SpellController],
  exports: [],
})
export class SpellModule {}
