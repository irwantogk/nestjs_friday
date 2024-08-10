import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getAllUser() {
    return 'Get all users';
  }
}
