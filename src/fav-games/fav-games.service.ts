import { Injectable } from '@nestjs/common';
import { FavGame } from './fav-game/fav-game.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user/user.entity';
import { AddFavGame } from './dto/add-fav-game';

@Injectable()
export class FavGamesService {
    constructor(
        @InjectRepository(FavGame)
        private readonly favGameRepository: Repository<FavGame>,
    ) { }

    async getUserFavGames(userName: User): Promise<FavGame[]> {
        
        return await this.favGameRepository.find({where: {user: userName.id}})

    }

    async createfavGame(favNuevo: AddFavGame): Promise<FavGame> {
        const nuevo = new FavGame();
        nuevo.game = favNuevo.game_id;
        nuevo.id=favNuevo.user_id;

        return this.favGameRepository.save(nuevo);

    }
}
