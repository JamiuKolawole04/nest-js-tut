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
  UseGuards,
  Req,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateUserDto } from 'src/users/dtos/createUsers.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user.pipe';
import { AuthGuard } from 'src/users/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
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
  createUer(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUser(userData);
  }

  //   @Get(':id')
  //   getUserById(@Req() requset: Request, @Res() response: Response) {
  //     console.log(requset.params);
  //     response.send(requset.params);
  //   }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const user = this.userService.fetchUsersById(id);

    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    return user;
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
