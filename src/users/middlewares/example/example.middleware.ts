import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('example middleware');
    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException('No Authorization token', HttpStatus.FORBIDDEN);
    if (authorization === 'qwerty') {
      next();
    } else {
      throw new HttpException(
        'Inavlid Authorization token',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
