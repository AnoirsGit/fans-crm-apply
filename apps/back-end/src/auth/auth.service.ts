// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser({ email, password }: AuthPayloadDto) {
    const foundUser = await this.usersService.findByEmail(email);

    if (!foundUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: userPassword, ...user } = foundUser.toJSON();
    return {
      ...user,
      token: this.jwtService.sign({ email: user.email, sub: user.id })
    };
  }

  async signup(payload: SignupDto) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const newUser = await this.usersService.create({ ...payload, password: hashedPassword });
    const { password, ...user } = newUser.toJSON();
    return {
      ...user,
      token: this.jwtService.sign({ email: user.email, sub: user.id })
    };
  }
}
