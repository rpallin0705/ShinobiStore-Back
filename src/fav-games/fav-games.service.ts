import { Injectable } from '@nestjs/common';
import { CreateFavGameDto } from './dto/create-fav-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user/user.entity';
import { Game } from 'src/games/game/game.entity';
import { Equal, Repository, getRepository } from 'typeorm';
import { FavGame } from './entities/fav-game.entity';
import { getMygameDto } from 'src/mygames/dto/create-mygame.dto';

@Injectable()
export class FavGamesService {

  constructor(
    @InjectRepository(FavGame)
    private readonly favGameRepository: Repository<FavGame>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) { }

  async create(createFavGameDto: CreateFavGameDto) {
    const existingGame = await this.gameRepository.findOne({ where: { id: createFavGameDto.game } });
    const existingUser = await this.userRepository.findOne({ where: { id: createFavGameDto.user } });

    if (!existingGame || !existingUser) {
      throw new Error("Usuario o juego no encontrado");
    }

    const existingFavgame = await this.favGameRepository.createQueryBuilder("fav_game")
      .where("fav_game.user = :user", { user: createFavGameDto.user })
      .andWhere("fav_game.game = :game", { game: createFavGameDto.game })
      .getOne();

    if (existingFavgame) {
      throw new Error("Este juego ya está en tu lista de favoritos");
    }

    const nuevo = this.favGameRepository.create(createFavGameDto);

    console.log(nuevo);
    return await this.favGameRepository.save(nuevo);
  }

  async findAll(getMygameDto:getMygameDto) {
    return this.favGameRepository.find({
      where: {
        user: Equal(getMygameDto.user),
      },
      relations: ['game'],
    });
  }



  async remove(createFavGameDto: CreateFavGameDto) {
    const existingFavgame = await this.favGameRepository.createQueryBuilder("fav_game")
      .where("fav_game.user = :user", { user: createFavGameDto.user })
      .andWhere("fav_game.game = :game", { game: createFavGameDto.game })
      .getOne();

    if (!existingFavgame) {
      throw new Error('No está en tu lista de favoritos');
    }

    await this.favGameRepository.delete(existingFavgame.id);
  }

}
