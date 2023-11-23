import { Injectable } from '@nestjs/common';
import { pbkdf2Sync } from 'crypto';
@Injectable()
export class PasswordService {
  getHash(password: string) {
    //#TODO Надо переделать чтобы либо соль генерилась отдельно либо мы переходим на ауф по почте
    const salt = 'niceSalt';
    return pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  }
}
