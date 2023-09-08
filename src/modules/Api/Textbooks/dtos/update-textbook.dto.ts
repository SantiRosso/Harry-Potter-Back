import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTextbookDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  author: string;
}
