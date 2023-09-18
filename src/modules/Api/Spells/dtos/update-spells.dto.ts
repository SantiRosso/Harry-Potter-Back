import { IsString, MinLength } from 'class-validator';

export class UpdateSpellDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(15)
  description: string;
}
