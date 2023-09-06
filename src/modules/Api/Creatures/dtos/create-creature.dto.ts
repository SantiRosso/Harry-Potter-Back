import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateCreatureDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  alive: boolean;
}
