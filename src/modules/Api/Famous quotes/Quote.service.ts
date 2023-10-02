import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/Quote.entity';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dtos/CreateQuote.dto';
import { UpdateQuoteDto } from './dtos/UpdateQuote.dto';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote) private quoteRepository: Repository<Quote>,
  ) {}

  async findAll() {
    return await this.quoteRepository.find();
  }

  async findById(id: string) {
    const quoteFound = await this.quoteRepository.find({
      where: {
        id,
      },
    });

    if (!quoteFound) {
      return new HttpException('Quote not found', HttpStatus.NOT_FOUND);
    }

    return quoteFound;
  }

  async create(createFields: CreateQuoteDto) {
    const newQuote = this.quoteRepository.create(createFields);
    return await this.quoteRepository.save(newQuote);
  }

  async update(id: string, updateFields: UpdateQuoteDto) {
    const result = await this.quoteRepository.update(id, updateFields);

    if (result.affected === 0) {
      return new HttpException('Quote not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.quoteRepository.delete(id);

    if (result.affected === 0) {
      return new HttpException('Quote not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
