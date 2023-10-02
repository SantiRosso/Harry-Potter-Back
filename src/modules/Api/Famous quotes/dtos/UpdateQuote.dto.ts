import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateQuoteDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  quote: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  author: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  date: string;
}
