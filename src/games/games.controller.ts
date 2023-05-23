import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './game/game.entity';

@Controller('games')
export class GamesController {


    constructor(private gameService: GamesService) {

    }
    @Get()
    getAll(@Res() response) {
        this.gameService.getAllGames().then(games => {
            response.status(HttpStatus.OK).json(games);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }

    @Post(':name')
    getGame(@Param('name') name: string, @Res() response) {
        this.gameService.getAgAME(name).then(game => {
            response.status(HttpStatus.OK).json(game);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        })
    }


}
