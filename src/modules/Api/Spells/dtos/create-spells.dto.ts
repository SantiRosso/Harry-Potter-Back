import { IsString, MinLength } from 'class-validator';

export class CreateSpellDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(15)
  description: string;
}
