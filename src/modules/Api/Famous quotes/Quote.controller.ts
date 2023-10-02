import { Controller } from '@nestjs/common';
import { QuoteService } from './Quote.service';

@Controller('api/quotes')
export class QuoteController {
  constructor(private quoteService: QuoteService) {}
}
