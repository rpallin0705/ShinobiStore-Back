import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Repository} from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }


    async login(userdata: User): Promise<User> {
        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.username = :username", { username: userdata.username })
            .andWhere("user.password = :password", { password: userdata.password })
            .getOne();

        if (!existingUser) {
            throw new Error('Este usuario no exists');
        }

        console.log(userdata.password);
        

        return existingUser;
    }

    async createUser(usuarioNuevo: CreateUserDto): Promise<User> {
        const existingUser = await this.userRepository.findOne({ where: { username: usuarioNuevo.username } });
        const existingEmail = await this.userRepository.findOne({ where: { email: usuarioNuevo.email } });

        if (existingUser) {
            throw new Error('El usuario ya está registrado');
        }
        if (existingEmail) {
            throw new Error('El correo ya está registrado');
        }

        const nuevo = this.userRepository.create(usuarioNuevo);


        return await this.userRepository.save(nuevo);

    }



}
