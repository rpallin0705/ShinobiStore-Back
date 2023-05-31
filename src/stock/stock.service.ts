import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { Game } from 'src/games/game/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';
import { MailerService } from 'src/mailer.service';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) { }


  /**
   * Crea un nuevo objeto de stock asociado a un juego en la base de datos.
   * @param gameId - El ID del juego al que se asociará el stock.
   * @returns El objeto de stock creado.
   */
  async create(createStockDto: CreateStockDto) {

    const game: Game = await this.gameRepository.findOne({ where: { id: createStockDto.game_id } });

    if (!game) {
      throw new Error("El título no existe");
    }


    const stock = this.stockRepository.create();
    game.n_stock++;
    stock.game = game.id;

    await this.gameRepository.save(game);


    return await this.stockRepository.save(stock);;
  }


  /**
  * Compra un artículo de un juego específico en la base de datos.
  * @param gameId - El ID del juego del cual se quiere comprar un artículo.
  */
  // async buy(gameId: any): Promise<Game> {

  //   const game: Game = await this.gameRepository.findOne({ where: { id: gameId.gameId } });

  //   if (!game) {
  //     throw new Error("El título no existe");
  //   }

  //   const stock: Stock = await this.stockRepository.findOne({ where: { game: gameId.gameId } });
  //   if (!stock) {
  //     throw new Error("No hay más artículos");
  //   }
  //   game.n_stock--;



  //   await this.gameRepository.save(game);
  //   await this.stockRepository.delete(stock.id);
  //   return game;
  // }

}
