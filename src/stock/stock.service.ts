import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Game } from 'src/games/game/game.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) { }



  async create(gameId: any) {
    console.log(gameId);
    const game: Game = await this.gameRepository.findOne({ where: { id: gameId.gameId } });

    if (!game) {
      throw new Error("El título no existe");
    }


    const stock = this.stockRepository.create();
    game.n_stock += 1;
    stock.game = game;
    
    await this.gameRepository.save(game);

    await this.stockRepository.save(stock);
    return stock;
  }

  findAll() {
    return `This action returns all stock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
