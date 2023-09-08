import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Textbook } from './entities/Textbooks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TextbookService {
  constructor(
    @InjectRepository(Textbook)
    private textbookRepository: Repository<Textbook>,
  ) {}

  async findAll() {
    return this.textbookRepository.find();
  }

  async findByAuthor(author: string) {
    const textbookFound = await this.textbookRepository.find({
      where: {
        author,
      },
    });

    if (!textbookFound) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return textbookFound;
  }
}
