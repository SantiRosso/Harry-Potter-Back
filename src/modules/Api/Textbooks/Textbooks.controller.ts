import { Controller, Get, Query, Body, Param, Patch } from '@nestjs/common';
import { TextbookService } from './Textbooks.service';
import { UpdateTextbookDto } from './dtos/update-textbook.dto';

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

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.textbookService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFields: UpdateTextbookDto,
  ) {
    return await this.textbookService.update(id, updateFields);
  }
}
