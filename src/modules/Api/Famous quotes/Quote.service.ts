import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/Quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote) private quoteRepository: Repository<Quote>,
  ) {}
}
