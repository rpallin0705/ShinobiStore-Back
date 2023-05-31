import { Injectable } from '@nestjs/common';
import { CreateMygameDto, getMygameDto } from './dto/create-mygame.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user/user.entity';
import { Game } from 'src/games/game/game.entity';
import { Equal, Repository } from 'typeorm';
import { MyGame } from './entities/mygame.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { MailerService } from 'src/users/mailer.service';


@Injectable()
export class MygamesService {

  constructor(
    @InjectRepository(MyGame)
    private readonly myGameRepository: Repository<MyGame>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
    private mailerService: MailerService,


  ) { }

  async create(createMygameDto: CreateMygameDto) {
    const existingGame = await this.gameRepository.findOne({ where: { id: createMygameDto.game } });
    const existingUser = await this.userRepository.findOne({ where: { id: createMygameDto.user } });

    if (!existingGame || !existingUser) {
      throw new Error("Usuario o juego no encontrado");
    } else if (existingGame.n_stock == 0) {
      throw new Error("No hay stock de este juego");
    }
    console.log(existingGame.n_stock);
    const stock = await this.stockRepository.findOne({ where: { game: createMygameDto.game } && { activo: true } });


    if (!stock) {
      throw new Error("No hay stock de este juego");
    }

    const info = 'Tu código de activación para ' + existingGame.nombre + ' es\n' +stock.codigo;

    this.mailerService.sendEmail('rpalomareslinares@gmail.com', 'Buenas noches', info);

    const nuevo = this.myGameRepository.create(createMygameDto);
    stock.activo = false;
    existingGame.n_stock--;
    nuevo.codigo = stock.codigo;
    console.log(nuevo.codigo);
    await this.gameRepository.save(existingGame);
    await this.stockRepository.save(stock);

    return await this.myGameRepository.save(nuevo);
  }

  async findAll(getMygameDto:getMygameDto) {
    return this.myGameRepository.find({
      where: {
        user: Equal(getMygameDto.user),
      },
      relations: ['game'],
    });
  }


}