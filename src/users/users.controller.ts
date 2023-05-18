//Controlador que gestiona la creación e inicio de sesión del usuario

import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { response } from 'express';
import { User } from './user/user.entity';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }


    //Metodo que crea un objeto de la clase CreateUserDto
    @Post('sing-up')
    create(@Body() createUserDto: CreateUserDto, @Res() response) {
        this.userService.createUser(createUserDto).then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }

    @Get('login')
    login(@Body() userdata: User, @Res() response){
        this.userService.login(userdata).then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });    
    }

    //Recibe todos los usuarios
    

}
