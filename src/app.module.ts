import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // controllers: [AppController],
  controllers: [],
  // providers: [AppService],
  providers: [],
})
export class AppModule {}
