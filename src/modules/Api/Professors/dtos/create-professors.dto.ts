import { IsString, IsNumber, IsBoolean, MinLength } from 'class-validator';

export class CreateProfessorDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(15)
  description: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  alive: boolean;
}
