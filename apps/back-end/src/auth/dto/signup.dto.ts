// src/users/dto/create-user.dto.ts

import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class SignupDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsOptional()
    @IsString()
    phone?: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  }