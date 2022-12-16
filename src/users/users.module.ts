import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // all users routes
    // consumer.apply(ExampleMiddleware).forRoutes('users');
    consumer
      .apply(ExampleMiddleware)
      .forRoutes(
        {
          path: '/users',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      )
      .apply(AnotherMiddleware)
      .forRoutes(
        {
          path: '/users',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      );
  }
}
