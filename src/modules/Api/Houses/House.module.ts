import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './entities/House.entity';
import { HouseService } from './House.service';
import { HouseController } from './House.controller';

@Module({
  imports: [TypeOrmModule.forFeature([House])],
  providers: [HouseService],
  controllers: [HouseController],
  exports: [],
})
export class HouseModule {}
