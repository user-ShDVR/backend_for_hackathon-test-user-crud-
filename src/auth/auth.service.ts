import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  // async signUp(username: string, password: string) {
  //   const user = await this.userService.findOneByEmail(username);

  //   if (user) {
  //     throw new BadRequestException({ type: 'email-exists' });
  //   }

  //   const hashPassword = this.passwordService.getHash(password);

  //   const newUser = await this.userService.create(username, hashPassword);

  //   const accessToken = await this.jwtService.signAsync({
  //     id: newUser.id,
  //     username: newUser.username,
  //     role: newUser.role,
  //   });

  //   return { token: accessToken, user: newUser };
  // }

  // async signIn(username: string, password: string) {
  //   const user = await this.userService.findOneByEmail(username);

  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }

  //   const hashPassword = this.passwordService.getHash(password);

  //   if (hashPassword !== user.password) {
  //     throw new UnauthorizedException();
  //   }

  //   const accessToken = await this.jwtService.signAsync({
  //     id: user.id,
  //     username: user.username,
  //     role: user.role,
  //   });

  //   return { token: accessToken, user: user };
  // }

  // async refreshJWT(token: string) {
  //   const tokenUser = await this.jwtService.verifyAsync(token);

  //   const user = await this.userService.findOneByEmail(tokenUser.username);

  //   const accessToken = await this.jwtService.signAsync({
  //     id: user.id,
  //     username: user.username,
  //     role: user.role,
  //   });

  //   return { token: accessToken, user: user };
  // }
}
