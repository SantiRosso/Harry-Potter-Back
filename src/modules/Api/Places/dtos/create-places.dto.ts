import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
