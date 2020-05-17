import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { typeOrmConfig } from './config/typeorm.config';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RoomModule],
})
export class AppModule {}
