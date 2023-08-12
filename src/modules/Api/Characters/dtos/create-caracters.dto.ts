import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class createCharacterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  house: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsBoolean()
  alive: boolean;
}
