import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsUrl()
  image: string;
}
