//Controlador que gestiona la creación e inicio de sesión del usuario

import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateFavGame, CreateUserDto } from './dto/create-user-dto';
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

    @Post('login')
    login(@Body() userdata: User, @Res() response) {
        this.userService.login(userdata).then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }

    @Post('addgame')
    addFav(@Body() createFavGAme: CreateFavGame, @Res() response) {


        this.userService.addFavoriteGame(createFavGAme.userId, createFavGAme.gameId).then(favgame => {
            response.status(HttpStatus.CREATED).json(favgame);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
        
    }
}
