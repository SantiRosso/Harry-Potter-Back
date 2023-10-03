import { Controller } from '@nestjs/common';
import { FoodService } from './Food.service';

@Controller()
export class FoodController {
  constructor(private foodService: FoodService) {}
}
