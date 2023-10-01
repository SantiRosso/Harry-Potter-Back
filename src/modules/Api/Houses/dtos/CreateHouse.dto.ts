import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHouseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
