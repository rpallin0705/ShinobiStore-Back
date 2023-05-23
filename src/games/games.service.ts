import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game/game.entity';
import { Repository } from 'typeorm';
import { FavGame } from 'src/fav-games/fav-game/fav-game.entity';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) { }

    async getAllGames(): Promise<Game[]> {
        return await this.gameRepository.find();
    }

    async getAgAME(name: string): Promise<Game> {

        const game = await this.gameRepository.findOne({ where: { nombre: name } });
        if (!game) {
            throw new Error('Lo siento, el título que buscas no se ha encontrado');
        }
        return game;
    }
}
