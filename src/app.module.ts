import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomModule } from './room/room.module';
import { typeOrmConfig } from './config/typeorm.config';
import { UploadModule } from './upload/upload.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RoomModule, UploadModule],
})
export class AppModule {}
