//Crea la clase CreateUserDto para el metodo post CreateUser

export class CreateUserDto {
    readonly username: string; //nombre de usuario
    readonly email: string; //email del usuario
    readonly passwd: string; // contraseña del usuario
}
export class LoginUserDto{
    readonly username: string; //email del usuario
    readonly password: string;
}
export class UpdatePasswordDto{
    readonly password: string; //Contraseña nueva
}

