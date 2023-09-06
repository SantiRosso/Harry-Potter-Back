import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class UpdateCharacterDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  house: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  age: number;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  alive: boolean;
}
