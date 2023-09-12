import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagicObject } from './entities/Object.entity';
import { ObjectsService } from './Object.service';
import { ObjectsController } from './Object.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MagicObject])],
  providers: [ObjectsService],
  controllers: [ObjectsController],
  exports: [],
})
export class ObjectModule {}
