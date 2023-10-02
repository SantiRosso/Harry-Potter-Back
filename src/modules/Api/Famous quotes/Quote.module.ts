import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities/Quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  providers: [],
  controllers: [],
  exports: [],
})
export class QuoteModule {}
