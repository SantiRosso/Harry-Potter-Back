import { Controller } from '@nestjs/common';
import { HouseService } from './House.service';

@Controller('api/houses')
export class HouseController {
  constructor(private houseService: HouseService) {}
}
