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




    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    /**Autentica a un usuario en el sistema.
     *@param loginUserDto: Un objeto que contiene los datos de inicio de sesión del usuario, como nombre de usuario o correo electrónico y contraseña.
     *@returns Una promesa que se resuelve en el usuario autenticado.
     *@throws Error si el usuario no existe, si el usuario no ha sido verificado o si la contraseña proporcionada es incorrecta
    */
    async login(loginUserDto: LoginUserDto): Promise<any> {
        // Buscar un usuario existente en la base de datos utilizando el nombre de usuario o correo electrónico proporcionado.
        const existingUser = await this.userRepository.createQueryBuilder("user")
            .where("user.username = :username", { username: loginUserDto.username })
            .orWhere("user.email = :email", { email: loginUserDto.username })
            .getOne();

        // Lanzar error si el usuario no existe.
        if (!existingUser) throw new Error('Usuario no encontrado');

        // Lanzar error si el usuario no está verificado.
        if (existingUser.token) throw new Error('Usuario no verificado');

        // Comparar la contraseña proporcionada con la contraseña almacenada en el usuario existente.
        const isPasswordMatch = await bcrypt.compare(loginUserDto.password, existingUser.password);

        // Lanzar error si la contraseña es incorrecta.
        if (!isPasswordMatch) throw new Error('Contraseña incorrecta');

        // Retornar el usuario existente.
        return await existingUser;
    }


    /**
 * Crea un nuevo usuario en el sistema.
 * @param usuarioNuevo: Un objeto que contiene los datos del nuevo usuario, como nombre de usuario, correo electrónico y contraseña.
 * @returns Una promesa que se resuelve en el nuevo usuario creado.
 * @throws Error si el usuario o el correo electrónico ya están registrados.
 */
    async createUser(usuarioNuevo: CreateUserDto): Promise<User> {
        // Verificar si ya existe un usuario con el mismo nombre de usuario.
        const existingUser = await this.userRepository.findOne({
            where: { username: usuarioNuevo.username },
        });

        // Verificar si ya existe un usuario con el mismo correo electrónico.
        const existingEmail = await this.userRepository.findOne({
            where: { email: usuarioNuevo.email },
        });

        // Lanzar error si el usuario ya está registrado.
        if (existingUser) throw new Error('El usuario ya está registrado');

        // Lanzar error si el correo electrónico ya está registrado.
        if (existingEmail) throw new Error('El correo ya está registrado');

        // Hashear la contraseña del usuario nuevo.
        const hashedPassword = await bcrypt.hash(usuarioNuevo.passwd, 10);

        // Generar un token de verificación utilizando JWT.
        const verificationToken = await jwt.sign({ username: usuarioNuevo.username }, 'Aghlsp9.dsgd', { expiresIn: '5m' });

        try {
            // Enviar un correo electrónico de verificación al nuevo usuario.
            this.emailSender(usuarioNuevo.email, usuarioNuevo.username, verificationToken, 0);
        } catch (error) {
            throw new Error(error);
        }

        // Crear un nuevo objeto de usuario con los datos proporcionados y el token de verificación.
        const nuevo = this.userRepository.create({
            ...usuarioNuevo,
            password: hashedPassword,
            token: verificationToken
        });

        // Guardar el nuevo usuario en la base de datos.
        return await this.userRepository.save(nuevo);
    }


/**
 * Verifica un token de verificación y actualiza el estado de verificación del usuario.
 * @param verificationToken: El token de verificación generado para el usuario.
 * @returns Una promesa que se resuelve en el usuario actualizado.
 * @throws Error si el token es inválido o ha expirado.
 */
async verification(verificationToken: string): Promise<User> {
    // Buscar un usuario existente en la base de datos utilizando el token de verificación.
    const existingUser = await this.userRepository.createQueryBuilder("user")
        .where("user.token = :token", { token: verificationToken })
        .getOne();

    try {
        // Verificar si el token de verificación es válido.
        const valido = jwt.verify(verificationToken, 'Aghlsp9.dsgd');
    }
    catch (error) {
        // Lanzar error si el token es inválido o ha expirado.
        throw new Error('El token es inválido o ha expirado.');
    }

    // Eliminar el token de verificación del usuario existente.
    existingUser.token = null;

    // Guardar los cambios en el usuario en la base de datos.
    return await this.userRepository.save(existingUser);
}


 /**
 * Reinicia la contraseña de un usuario.
 * @param email: El correo electrónico del usuario para el cual se restablecerá la contraseña.
 * @throws Error si el correo electrónico no está registrado o si ocurre un error al enviar el correo de reinicio.
 * @returns Una promesa que se resuelve en el usuario actualizado con el token de reinicio de contraseña.
 */
async passwordReset(email: string) {

    // Buscar un usuario existente en la base de datos utilizando el correo electrónico proporcionado.
    const existingUser = await this.userRepository.createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();

    // Lanzar error si el correo electrónico no está registrado.
    if (!existingUser) {
        throw new Error('Correo no registrado');
    }

    // Generar un token de reinicio de contraseña utilizando JWT.
    const verificationToken = await jwt.sign({ username: existingUser.username }, 'Aghlsp9.dsgd', { expiresIn: '5m' });


    try {
        // Enviar un correo electrónico al usuario con el token de reinicio de contraseña.
        this.emailSender(existingUser.email, existingUser.username, verificationToken, 1);
    } catch (error) {
        // Lanzar error si ocurre un error al enviar el correo de reinicio.
        throw new Error("El correo no se pudo enviar");
    }

    // Asignar el token de reinicio de contraseña al usuario existente.
    existingUser.pass_token = verificationToken;

    // Guardar los cambios en el usuario en la base de datos.
    return await this.userRepository.save(existingUser);
}


    /**
 * Cambia la contraseña de un usuario utilizando un token de verificación.
 * @param updatePassworddto: Un objeto que contiene la nueva contraseña.
 * @param verificationToken: El token de verificación utilizado para validar la operación.
 * @returns Una promesa que se resuelve en el usuario actualizado con la contraseña cambiada.
 * @throws Error si el token es inválido o ha expirado.
 */
async passwordChange(updatePassworddto: UpdatePasswordDto, verificationToken: string) {
    // Buscar un usuario existente en la base de datos utilizando el token de verificación de contraseña.
    const existingUser = await this.userRepository.createQueryBuilder("user")
        .where("user.pass_token = :pass_token", { pass_token: verificationToken })
        .getOne();


    try {
        // Verificar si el token de verificación es válido.
        const valido = jwt.verify(verificationToken, 'Aghlsp9.dsgd');
    }
    catch (error) {
        // Lanzar error si el token es inválido o ha expirado.
        throw new Error('El token es inválido o ha expirado.');
    }

    // Hashear la nueva contraseña.
    const hashedPassword = await bcrypt.hash(updatePassworddto.password, 10);

    // Actualizar la contraseña del usuario existente y eliminar el token de verificación.
    existingUser.password = hashedPassword;
    existingUser.pass_token = null;

    // Guardar los cambios en el usuario en la base de datos.
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