import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {


    constructor(private gameService: GamesService) {

    }
    @Get()
    getAll(@Res() response) {
        this.gameService.getAllGames().then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }


}
