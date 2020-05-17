import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateTaskDto } from './dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async store(@Body() createTaskDto: CreateTaskDto) {
    return this.roomService.store(createTaskDto);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  async index() {
    return this.roomService.index();
  }
}
