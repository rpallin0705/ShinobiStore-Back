import { Injectable } from '@nestjs/common';
import { CreateMygameDto, getMygameDto } from './dto/create-mygame.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user/user.entity';
import { Game } from 'src/games/game/game.entity';
import { Equal, Repository } from 'typeorm';
import { MyGame } from './entities/mygame.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { MailerService } from 'src/mailer.service';
import * as fs from 'fs';



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

    const stock = await this.stockRepository.findOne({ where: { game: createMygameDto.game } && { activo: true } });


    if (!stock) {
      throw new Error("No hay stock de este juego");
    }

    try {
      this.emailSender(existingUser.email, stock.codigo, existingGame.nombre, existingGame.image_port);
    } catch (error) {
      throw new Error(error);
    };

    const nuevo = this.myGameRepository.create(createMygameDto);
    stock.activo = false;
    existingGame.n_stock--;
    nuevo.codigo = stock.codigo;
    console.log(nuevo.codigo);
    await this.gameRepository.save(existingGame);
    await this.stockRepository.save(stock);

    return await this.myGameRepository.save(nuevo);
  }

  async findAll(getMygameDto: getMygameDto) {
    return this.myGameRepository.find({
      where: {
        user: Equal(getMygameDto.user),
      },
      relations: ['game'],
    });
  }

  private emailSender(correo: string, codigo: string, juego: string, imagen:string) {

    const image = fs.readFileSync('src/assets/icon.png', { encoding: 'base64' });


    const mensaje = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><header style=><img style="height: auto; width:100%;" src="'+imagen+'" alt=""></header><h1 style="padding-top:20px">Muchas gracias por su compra</h1><h1 style="padding-top:20px">Su código de activación para ' + juego + ' es:</h1><p style="padding-top:50px; font-size: 30px">' + codigo + '</p></body></html>'
    const subject = 'Gracias por su compra de ' + juego;
    this.mailerService.sendEmail(correo, subject, mensaje);

    return 'mensaje enviado';

  }

}