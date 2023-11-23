import { Injectable } from '@nestjs/common';
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(username: string, email: string) {
    const user = await prisma.user.create({ data: { username, email } });
    return user;
  }

  findAll() {
    return prisma.user.findMany();
  }

  findOneById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(username: string) {
    return prisma.user.findFirst({ where: { username } });
  }

  async update(
    id: number,
    updateUserDto: { username?: string; email?: string; role?: Role },
  ) {
    await prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return this.findOneById(id);
  }

  async remove(ids: number | number[]) {
    const userIds = Array.isArray(ids) ? ids : [ids];

    const deletedUsers = await Promise.all(
      userIds.map(async (id) => {
        const user = await prisma.user.findUnique({ where: { id } });
        if (user) {
          await prisma.user.delete({ where: { id } });
          return user;
        }
        return null;
      }),
    );

    return deletedUsers.filter(Boolean);
  }
}
