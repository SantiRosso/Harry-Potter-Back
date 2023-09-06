import { Module } from '@nestjs/common';
import { CreatureService } from './Creature.service';
import { CreatureController } from './Creature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Creature } from '../entities/Creature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Creature])],
  providers: [CreatureService],
  controllers: [CreatureController],
  exports: [],
})
export class CreaturesModule {}
