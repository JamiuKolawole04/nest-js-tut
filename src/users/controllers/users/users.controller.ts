import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  ParseBoolPipe,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateUserDto } from 'src/users/dtos/createUsers.dto';

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

  //   @Post()
  //   createUer(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     response.send(request.body);
  //   }
  @Post()
  @UsePipes(new ValidationPipe())
  createUer(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData;
  }

  //   @Get(':id')
  //   getUserById(@Req() requset: Request, @Res() response: Response) {
  //     console.log(requset.params);
  //     response.send(requset.params);
  //   }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }

  @Get(':id/:postId')
  getUserAndPostById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log({ id, postId });
    return { id, postId };
  }

  @Get('driver/sort/query')
  getDriversByQuery(
    @Query('sortDesc', ParseBoolPipe) sortDesc: boolean,
    @Query('id', ParseIntPipe) id: number,
  ) {
    console.log(sortDesc);
    return sortDesc;
  }
}
