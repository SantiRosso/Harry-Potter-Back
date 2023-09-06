import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class UpdateCreatureDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  type: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  alive: boolean;
}
