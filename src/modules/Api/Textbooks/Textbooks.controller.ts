import { Controller, Get, Query } from '@nestjs/common';
import { TextbookService } from './Textbooks.service';

@Controller('api/textbooks')
export class TextbookController {
  constructor(private textbookService: TextbookService) {}

  @Get()
  async findAll(@Query('author') author: string) {
    const textbooks = author
      ? await this.textbookService.findByAuthor(author)
      : await this.textbookService.findAll();
    return textbooks;
  }
}
