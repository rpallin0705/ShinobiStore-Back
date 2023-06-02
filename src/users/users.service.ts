import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto, UpdatePasswordDto } from './dto/create-user-dto';
import { Game } from 'src/games/game/game.entity';
import { MailerService } from 'src/mailer.service';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
        private mailerService: MailerService,
    ) { }

    /**
     * 
     * @param loginUserDto 
     * @returns 
     * TODO comprobar si el usaurio se ha verificado, si no se ha verificado mandar otro token y en front avisar de si ha caducado el token
     */
    async login(loginUserDto: LoginUserDto): Promise<any> {
        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.username = :username", { username: loginUserDto.username })
            .orWhere("user.email = :email", { email: loginUserDto.username })
            .getOne();

        if (!existingUser) {
        }
        if (existingUser.token) {
            throw new Error('Usuario no verificado');
        }


        const isPasswordMatch = await bcrypt.compare(loginUserDto.password, existingUser.password);

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



        const verificationToken = await jwt.sign({ username: usuarioNuevo.username }, 'Aghlsp9.dsgd', { expiresIn: '5m' });
        console.log(verificationToken);

        try {
            this.emailSender(usuarioNuevo.email, usuarioNuevo.username, verificationToken, 0);
        } catch (error) {
            throw new Error(error);
        }

        const nuevo = this.userRepository.create({
            ...usuarioNuevo,
            password: hashedPassword,
            token: verificationToken
        });

        return await this.userRepository.save(nuevo);


    }

    async verification(verificationToken: string): Promise<User> {
        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.token = :token", { token: verificationToken })
            .getOne();

        try {
            const valido = jwt.verify(verificationToken, 'Aghlsp9.dsgd');
        }
        catch (error) {
            throw new Error('El token es inválido o a expirado.');
        }

        existingUser.token = null;

        return await this.userRepository.save(existingUser);
    }


    async passwordReset(email: string) {

        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.email = :email", { email: email })
            .getOne();

        if (!existingUser) {
            throw new Error('Correo no registrado');
        }
        const verificationToken = await jwt.sign({ username: existingUser.username }, 'Aghlsp9.dsgd', { expiresIn: '5m' });
        console.log(verificationToken);

        try {
            this.emailSender(existingUser.email, existingUser.username, verificationToken, 1);
        } catch (error) {
            throw new Error("El correo no se puedo enviar");
        }

        existingUser.pass_token = verificationToken;

        return await this.userRepository.save(existingUser);
    }

    async passwordChange(updatePassworddto: UpdatePasswordDto, verificationToken: string) {
        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.pass_token = :pass_token", { pass_token: verificationToken })
            .getOne();

            console.log(updatePassworddto.password)
        try {
            const valido = jwt.verify(verificationToken, 'Aghlsp9.dsgd');
        }
        catch (error) {
            throw new Error('El token es inválido o a expirado.');
        }

        const hashedPassword = await bcrypt.hash(updatePassworddto.password, 10);

        existingUser.password = hashedPassword;
        existingUser.pass_token = null;

        return await this.userRepository.save(existingUser);

    }



    private emailSender(correo: string, username: string, token: string, passOrVerif: number) {

        const image = "https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81o1ajGn_UGprefkKm6PoygC_IgznLP4ywipfl-223oUT7L6VJSV_1GbBo275A4K3jLx9XN4OFd9K5YIMHSzTke2RrcdIw=w1280-h1000";
        let subject: string = '';
        let mensaje: string = '';
        switch (passOrVerif) {
            case 0:
                mensaje = `<body><header style=><img style="height: 200px" src="${image}" alt=""></header><h1 style="padding-top:20px">Bienvenido/a ShinobiStore ${username}'</h1><h1 style="padding-top:20px">Clicka el enlace para activar tu cuenta:</h1><p style="padding-top:50px; font-size: 50px"><a href="http://localhost:8080/login/${token}">ShinobiStore verification</a></p></body>`
                subject = 'Bienvenido a ShinobiStore ' + username;
                break;
            case 1:
                mensaje = `<body><header style=><img style="height: 200px" src="${image}" alt=""></header><h1 style="padding-top:20px">Has solicitado cambiar la contraseña</h1><h1 style="padding-top:20px">Clicka el enlace para cambiar su contraseña:</h1><p style="padding-top:50px; font-size: 50px"><a href="http://localhost:8080/reset/${token}">ShinobiStore verification</a></p></body>`
                subject = 'Cambio de contraseña de ' + username;
                break;
        }
        console.log(image);
        this.mailerService.sendEmail(correo, subject, mensaje);

        return 'mensaje enviado';

    }


}