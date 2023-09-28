import { Controller } from '@nestjs/common';
import { EventService } from './Event.service';

@Controller('api/events')
export class EventController {
  constructor(private eventService: EventService) {}
}
