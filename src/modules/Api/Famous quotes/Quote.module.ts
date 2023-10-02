import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities/Quote.entity';
import { QuoteService } from './Quote.service';
import { QuoteController } from './Quote.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  providers: [QuoteService],
  controllers: [QuoteController],
  exports: [],
})
export class QuoteModule {}
