import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(data: RegisterDto) {
    const checkUser = await this.prismaService.users.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            username: data.username,
          },
        ],
      },
    });

    if (checkUser) {
      throw new HttpException('User is exists', HttpStatus.FOUND);
    }

    return await this.prismaService.users.create({
      data: data,
    });
  }
}
