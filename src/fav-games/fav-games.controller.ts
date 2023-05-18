//Controlador para los juegos favoritos de cada usuario

import { Body, Controller, Delete, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AddFavGame } from './dto/add-fav-game';
import { User } from 'src/users/user/user.entity';
import { response } from 'express';
import { FavGamesService } from './fav-games.service';

@Controller('fav-games')
export class FavGamesController {

    constructor(private favGameService: FavGamesService) {

    }
    @Get()
    getAll(@Body() userName: User, @Res() response) {
        this.favGameService.getUserFavGames(userName).then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }

    @Post()
    addFavGame(@Body() addFavGame: AddFavGame, @Res() response) {
        this.favGameService.createfavGame(addFavGame).then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }

    @Delete()
    deleteFavGame() {
        return 'Juego eliminado de favoritos';
    }
}
