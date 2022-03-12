import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { CustomResponse } from "../libraries/custom-response.class";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any, done: VerifiedCallback) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      return done(
        //new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
        CustomResponse.serialize(HttpStatus.UNAUTHORIZED,'Unauthorized access',[]),
        false,
      );
    }

    return done(null, user, payload.iat);
  }
}