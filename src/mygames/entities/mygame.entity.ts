import { Game } from "src/games/game/game.entity";
import { User } from "src/users/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MyGame {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    user: number;

    @ManyToOne(() => Game, game => game.id)
    game: number;

    @Column()
    código: string;
}
