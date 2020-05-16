import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
