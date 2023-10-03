import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './entities/Food.entity';
import { FoodService } from './Food.service';
import { FoodController } from './Food.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  providers: [FoodService],
  controllers: [FoodController],
  exports: [],
})
export class FoodModule {}
