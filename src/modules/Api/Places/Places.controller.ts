import { Controller } from '@nestjs/common';
import { PlacesService } from './Places.service';

@Controller('api/places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}
}
