import { Controller, Get } from '@nestjs/common';

@Controller('api/characters')
export class CharactersController {
  constructor() {}

  @Get()
  findAll() {}
}
