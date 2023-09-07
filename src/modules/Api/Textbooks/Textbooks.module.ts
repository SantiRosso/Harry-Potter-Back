import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Textbook } from './entities/Textbooks.entity';
import { TextbookService } from './Textbooks.service';
import { TextbookController } from './Textbooks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Textbook])],
  providers: [TextbookService],
  controllers: [TextbookController],
  exports: [],
})
export class TextbookModule {}
