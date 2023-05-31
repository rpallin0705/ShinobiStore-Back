import { Injectable } from '@nestjs/common';
import { CreateTarjetaDto } from './dto/create-tarjeta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { User } from 'src/users/user/user.entity';
import { Tarjeta } from './entities/tarjeta.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TarjetasService {

  constructor(
    @InjectRepository(Tarjeta)
    private readonly tarjetaRepository: Repository<Tarjeta>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }



  /**
   * Crea un objeto de tarjeta para el usuario seleccionado
   * @param createTarjetaDto objeto createTarjetaDto from create-tarjeta-dto.ts
   * @returns .save de un nuevo objeto Tarejta
   * 
   * TODO encriptar la tarjeta
   */
  async create(createTarjetaDto: CreateTarjetaDto): Promise<Tarjeta> {
    const existingUser = await this.userRepository.findOne({ where: { id: createTarjetaDto.user } });

    if (!existingUser) {
      throw new Error("El usuario no existe");
    } else if (await this.tarjetaRepository.findOne({ where: { n_tarjeta: createTarjetaDto.n_tarjeta } })) {
      throw new Error("Esta tarjeta ya existe");
    }

    const last_digit = await createTarjetaDto.n_tarjeta.slice(-4);

    const hashedCard = await bcrypt.hash(createTarjetaDto.n_tarjeta, 10);

    const nuevaTarjeta = this.tarjetaRepository.create({
      ...createTarjetaDto,
      n_tarjeta: hashedCard,
      last_digits: last_digit
    });

    return await this.tarjetaRepository.save(nuevaTarjeta);
  }




  /**
   * Busca todas las tarjetas de un usuario y las devuelve
   * @param id Id del usuario para solicitar todas sus tarjetas
   * @returns Un array con las tarjetas del usuario
   * @throws {Error} si el usuario no tiene tarjetas
   */
  async findAllUserCreditCard(id: number): Promise<Tarjeta[]> {
    const tarjetas = await this.tarjetaRepository.find({
      where: {
        user: Equal(id),
      }
    });

    if (tarjetas.length == 0) {
      throw new Error("El usuario no tiene ninguna tarjeta registrada");
    }

    return tarjetas;
  }



  /**
   * Recibe el id de una tarjeta, la busca y la borra
   * @param id Clave primaria de una entidad tarjeta
   * @returns Función remove del repositorio TarjetaRepository
   */
  async remove(id: number): Promise<Tarjeta> {

    const tarjeta = await this.tarjetaRepository.findOne({
      where: {
        id: Equal(id),
      }
    });

    return await this.tarjetaRepository.remove(tarjeta);

  }
}
