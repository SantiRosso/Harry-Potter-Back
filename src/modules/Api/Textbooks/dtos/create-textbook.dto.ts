import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTextbookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}
