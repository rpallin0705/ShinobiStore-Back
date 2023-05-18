import { type } from "os";
import { Game } from "src/games/game/game.entity";
import { User } from "src/users/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FavGame {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User) @JoinColumn()
    user: number;

    @ManyToOne(type => Game) @JoinColumn()
    game: number;
}