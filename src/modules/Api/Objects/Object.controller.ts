import { Controller } from '@nestjs/common';
import { ObjectsService } from './Object.service';

@Controller('api/objects')
export class ObjectsController {
  constructor(private objectsService: ObjectsService) {}
}
