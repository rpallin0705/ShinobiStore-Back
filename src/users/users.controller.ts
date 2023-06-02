//Controlador que gestiona la creación e inicio de sesión del usuario

import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateUserDto, LoginUserDto, UpdatePasswordDto } from './dto/create-user-dto';
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
    login(@Body() LoginUserDto: LoginUserDto, @Res() response) {
        this.userService.login(LoginUserDto).then(user => {
            response.status(HttpStatus.CREATED).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
    }

    @Post('verification/:token')
    verification(@Param('token') token: string, @Res() response) {
        this.userService.verification(token).then(user => {
            response.status(HttpStatus.OK).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
        
    }

    @Post('passwd/:email')
    passReset(@Param('email') email: string, @Res() response) {
        this.userService.passwordReset(email).then(user => {
            response.status(HttpStatus.OK).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
        
    }


    @Patch('passwd/:token')
    passChange(@Param('token') token:string, @Body()updatePasswordDto: UpdatePasswordDto, @Res() response) {
        this.userService.passwordChange(updatePasswordDto,token).then(user => {
            response.status(HttpStatus.OK).json(user);
        }).catch((error: Error) => {
            response.status(HttpStatus.FORBIDDEN).json(error.message);
        });
        
    }
}
