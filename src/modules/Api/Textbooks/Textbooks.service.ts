import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Textbook } from './entities/Textbooks.entity';
import { Repository } from 'typeorm';
import { UpdateTextbookDto } from './dtos/update-textbook.dto';

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

  async update(id: string, updateTextbookFields: UpdateTextbookDto) {
    const result = await this.textbookRepository.update(
      { id },
      updateTextbookFields,
    );

    if (result.affected === 0) {
      return new HttpException('Textbook not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.textbookRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Textbook not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
