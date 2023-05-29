import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { MygamesService } from './mygames.service';
import { CreateMygameDto } from './dto/create-mygame.dto';

@Controller('mygames')
export class MygamesController {
  constructor(private readonly mygamesService: MygamesService) { }

  @Post()
  create(@Body() createMygameDto: CreateMygameDto, @Res() response) {
    this.mygamesService.create(createMygameDto).then(favGame => {
      response.status(HttpStatus.CREATED).json(favGame);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }

  @Get()
  findAll(@Body() userId: number, @Res() response) {
    this.mygamesService.findAll(userId).then(favGames => {
      response.status(HttpStatus.OK).json(favGames);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }
}


