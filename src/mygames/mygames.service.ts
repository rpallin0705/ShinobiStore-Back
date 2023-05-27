import { Injectable } from '@nestjs/common';
import { CreateMygameDto } from './dto/create-mygame.dto';
import { UpdateMygameDto } from './dto/update-mygame.dto';

@Injectable()
export class MygamesService {
  create(createMygameDto: CreateMygameDto) {
    return 'This action adds a new mygame';
  }

  findAll() {
    return `This action returns all mygames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mygame`;
  }

  update(id: number, updateMygameDto: UpdateMygameDto) {
    return `This action updates a #${id} mygame`;
  }

  remove(id: number) {
    return `This action removes a #${id} mygame`;
  }
}
