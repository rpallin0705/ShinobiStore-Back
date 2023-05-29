import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { MygamesService } from './mygames.service';
import { CreateMygameDto, getMygameDto } from './dto/create-mygame.dto';


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

  @Post('get')
  findAll(@Body() getMygameDto: getMygameDto, @Res() response) {
    this.mygamesService.findAll(getMygameDto).then(favGames => {
      response.status(HttpStatus.OK).json(favGames);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }
}


