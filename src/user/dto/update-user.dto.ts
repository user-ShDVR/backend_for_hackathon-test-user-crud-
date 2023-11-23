import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'qweqwe',
  })
  username: string;

  @ApiProperty({
    example: 'qweqwe@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'USER',
  })
  role: Role;
}
