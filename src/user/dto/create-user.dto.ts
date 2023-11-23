import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'qweqwe',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'qweqwe@mail.ru',
  })
  @IsEmail()
  email: string;
}
