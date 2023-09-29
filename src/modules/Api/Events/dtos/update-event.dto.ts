import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  date: string;
}
