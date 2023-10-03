import { IsArray, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateFoodDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  images: string[];
}
