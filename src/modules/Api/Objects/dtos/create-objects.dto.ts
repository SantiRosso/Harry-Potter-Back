import { IsString, IsNotEmpty } from 'class-validator';

export class CreateObjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
