import { Game } from "src/games/game/game.entity";
import { User } from "src/users/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MyGame {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id, { onDelete: "CASCADE" })
    user: number;

    @ManyToOne(() => Game, game => game.id, { onDelete: "CASCADE" })
    game: number;

    @Column()
    codigo: string;
}