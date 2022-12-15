import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      {
        username: 'anson',
        gmail: 'anson@gmail.com',
      },
    ];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'anson',
        gmail: 'anson@gmail.com',
        posts: [
          {
            id: 1,
            title: 'post 1',
          },
          {
            id: 2,
            title: 'post 2',
          },
        ],
      },
    ];
  }

  @Post()
  createUer() {
    return {};
  }
}
