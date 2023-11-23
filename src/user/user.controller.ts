import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@ApiTags('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(
      createUserDto.email,
      createUserDto.username,
    );
    return { message: 'Пользователь создан!', user };
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneById(+id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.update(+id, updateUserDto);
    return updatedUser
      ? {
          message: 'Данные пользователя успешно обновленны!',
          user: updatedUser,
        }
      : { message: 'Пользователь не найден!' };
  }

  @Delete('delete/:ids')
  async deleteUser(@Param('ids') ids: string) {
    const userIds = ids.split(',').map(Number);

    const deletedUsers = await this.userService.remove(userIds);

    return {
      message: 'Пользователь успешно удален!',
      deletedUsers,
    };
  }
}
