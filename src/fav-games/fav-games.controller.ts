import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { FavGamesService } from './fav-games.service';
import { CreateFavGameDto } from './dto/create-fav-game.dto';
import { response } from 'express';

@Controller('fav-games')
export class FavGamesController {
  constructor(private readonly favGamesService: FavGamesService) { }

  @Post()
  create(@Body() createFavGameDto: CreateFavGameDto, @Res() response) {
    this.favGamesService.create(createFavGameDto).then(favGame => {
      response.status(HttpStatus.CREATED).json(favGame);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }

  @Get()
  findAll(userId: number, @Res() response) {
    this.favGamesService.findAll(userId).then(favGames => {
      response.status(HttpStatus.OK).json(favGames);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }

  


  @Post('delete')
  remove(@Body() createFavGameDto: CreateFavGameDto, @Res() response) {
    this.favGamesService.remove(createFavGameDto).then(favGames => {
      response.status(HttpStatus.OK).json(favGames);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }
}
