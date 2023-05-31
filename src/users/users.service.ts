import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { Game } from 'src/games/game/game.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) { }


    async login(userdata: User): Promise<any> {
        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.username = :username", { username: userdata.username })
            .orWhere("user.email = :email", { email: userdata.username })
            .getOne();

        if (!existingUser) {
            throw new Error('Este usuario no existe');
        }


        const isPasswordMatch = await bcrypt.compare(userdata.password, existingUser.password);

        if (!isPasswordMatch) {
            throw new Error('Contraseña incorrecta');
        }


        return await existingUser;
    }

    async createUser(usuarioNuevo: CreateUserDto): Promise<User> {
        const existingUser = await this.userRepository.findOne({
            where: { username: usuarioNuevo.username },
        });
        const existingEmail = await this.userRepository.findOne({
            where: { email: usuarioNuevo.email },
        });

        if (existingUser) {
            throw new Error('El usuario ya está registrado');
        }
        if (existingEmail) {
            throw new Error('El correo ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(usuarioNuevo.passwd, 10);


        const nuevo = this.userRepository.create({
            ...usuarioNuevo,
            password: hashedPassword,
        });

        return await this.userRepository.save(nuevo);


    }



  


}