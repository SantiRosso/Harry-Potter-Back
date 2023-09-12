import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateObjectDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description: string;
}
