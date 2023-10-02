import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCreatureDto {
  @IsNotEmpty()
  @IsString()
  quote: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}
