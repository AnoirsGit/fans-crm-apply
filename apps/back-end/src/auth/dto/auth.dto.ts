import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthPayloadDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
