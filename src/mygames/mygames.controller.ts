import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MygamesService } from './mygames.service';
import { CreateMygameDto } from './dto/create-mygame.dto';
import { UpdateMygameDto } from './dto/update-mygame.dto';

@Controller('mygames')
export class MygamesController {
  constructor(private readonly mygamesService: MygamesService) {}

  @Post()
  create(@Body() createMygameDto: CreateMygameDto) {
    return this.mygamesService.create(createMygameDto);
  }

  @Get()
  findAll() {
    return this.mygamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mygamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMygameDto: UpdateMygameDto) {
    return this.mygamesService.update(+id, updateMygameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mygamesService.remove(+id);
  }
}
