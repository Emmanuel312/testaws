import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { CreateTaskDto } from './dto/create-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomRepository) private roomRepository: RoomRepository,
  ) {}

  async store(createTaskDto: CreateTaskDto) {
    return this.roomRepository.store(createTaskDto);
  }

  async index() {
    return this.roomRepository.index();
  }
}
