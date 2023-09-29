import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { EventService } from './Event.service';
import { CreateEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/update-event.dto';

@Controller('api/events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async findAll() {
    return await this.eventService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.eventService.findById(id);
  }

  @Post()
  async create(@Body() createFields: CreateEventDto) {
    return this.eventService.create(createFields);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFields: UpdateEventDto) {
    return this.eventService.update(id, updateFields);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.eventService.delete(id);
  }
}
