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
    const result = await this.textbookRepository.find();

    if (!result.length) {
      return new HttpException('No textbooks', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async findByAuthor(author: string) {
    const textbookFound: Textbook[] = await this.textbookRepository.find({
      where: {
        author,
      },
    });

    if (!textbookFound) {
      return new HttpException('Character not found', HttpStatus.NOT_FOUND);
    }

    return textbookFound;
  }

  async findById(id: string) {
    const textbookFound: Textbook[] = await this.textbookRepository.find({
      where: {
        id,
      },
    });

    if (!textbookFound) {
      return new HttpException('Textbook not found', HttpStatus.NOT_FOUND);
    }

    return textbookFound;
  }
}
