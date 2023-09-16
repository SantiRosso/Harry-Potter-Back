import { IsString, IsNotEmpty } from 'class-validator';

export class UpdatePlaceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
