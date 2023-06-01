//Crea la clase CreateUserDto para el metodo post CreateUser

export class CreateUserDto {
    readonly username: string; //nombre de usuario
    readonly email: string; //email del usuario
    readonly passwd: string; // contraseña del usuario
}
export class UpdatePasswordDto{
    readonly password: string; //Contraseña nueva
}

