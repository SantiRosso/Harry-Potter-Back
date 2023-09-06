import { Controller } from '@nestjs/common';
import { CreatureService } from './Creature.service';

@Controller('creatures')
export class CreatureController {
  constructor(private creatureService: CreatureService) {}
}
