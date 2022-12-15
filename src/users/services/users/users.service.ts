import { Injectable } from '@nestjs/common';

import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'anson',
      email: 'anson@anson.com',
    },
    {
      username: 'corey',
      email: 'corey@anson.com',
    },
    {
      username: 'spencer',
      email: 'spencer@gmail.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }

  fetchUsersById(id: number) {
    return { id, username: 'anson', email: 'anson@gmail.com' };
    // return null;
  }
}
