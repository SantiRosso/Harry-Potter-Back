import { Controller } from '@nestjs/common';
import { TextbookService } from './Textbooks.service';

@Controller('api/textbooks')
export class TextbookController {
  constructor(private textbooksService: TextbookService) {}
}
