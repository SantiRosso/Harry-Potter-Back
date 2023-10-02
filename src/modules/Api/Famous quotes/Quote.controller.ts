import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { QuoteService } from './Quote.service';
import { CreateQuoteDto } from './dtos/CreateQuote.dto';
import { UpdateQuoteDto } from './dtos/UpdateQuote.dto';

@Controller('api/quotes')
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Get()
  async findAll() {
    return await this.quoteService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.quoteService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreateQuoteDto) {
    return await this.quoteService.create(createFields);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateQuoteDto) {
    return await this.quoteService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.quoteService.delete(id);
  }
}
