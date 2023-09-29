import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/Event.entity';
import { CreateEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/update-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async findAll() {
    return await this.eventRepository.find();
  }

  async findById(id: string) {
    const eventFound = await this.eventRepository.find({
      where: {
        id,
      },
    });

    if (!eventFound) {
      return new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }

    return eventFound;
  }

  async create(createEventDto: CreateEventDto) {
    // const arrFound = await this.characterRepository.find({
    //   where: {
    //     document: createArrendatarioDto.document,
    //   },
    // });

    // if (arrFound.length) {
    //   return new HttpException('Document already exists', HttpStatus.CONFLICT);
    // }

    const newEvent = this.eventRepository.create(createEventDto);
    return await this.eventRepository.save(newEvent);
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const result = await this.eventRepository.update({ id }, updateEventDto);

    if (result.affected === 0) {
      return new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async delete(id: string) {
    const result = await this.eventRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException('Event not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
