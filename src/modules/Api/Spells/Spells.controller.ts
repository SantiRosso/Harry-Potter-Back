import { Controller } from '@nestjs/common';
import { SpellService } from './Spells.service';

@Controller('api/spells')
export class SpellController {
  constructor(private spellService: SpellService) {}
}
