// src/auth/auth.controller.ts

import { Body, Controller, HttpException, Post, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/loacal.guard';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Body() payload: AuthPayloadDto) {
    return this.authService.validateUser(payload);
  }

  @Post('signup')
  async signup(@Body() payload: SignupDto) {
    return this.authService.signup(payload);
  }
}
