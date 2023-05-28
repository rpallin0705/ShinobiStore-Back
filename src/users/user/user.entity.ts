import { FavGame } from "src/fav-games/entities/fav-game.entity";
import { Game } from "src/games/game/game.entity";
import { Tarjeta } from "src/tarjetas/entities/tarjeta.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Tarjeta, tarjeta => tarjeta.user)
    stock: Tarjeta[];

    @OneToMany(() => FavGame, favGame => favGame.user)
    favGame: FavGame[];

}