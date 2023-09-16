import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './entities/Place.entity';
import { PlacesService } from './Places.service';
import { PlacesController } from './Places.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlacesService],
  controllers: [PlacesController],
  exports: [],
})
export class PlacesModule {}
