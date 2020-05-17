import { Repository, EntityRepository } from 'typeorm';
import { Room } from './room.entity';
import { CreateTaskDto } from './dto/create-room.dto';

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {
  async store(createTaskDto: CreateTaskDto): Promise<Room> {
    const { title } = createTaskDto;

    const room = new Room();
    room.title = title;
    await room.save();

    return room;
  }
  async index(): Promise<Room[]> {
    const rooms = await Room.find({});

    return rooms;
  }
}
