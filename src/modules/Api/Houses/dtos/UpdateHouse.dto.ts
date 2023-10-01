import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateHouseDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;
}
