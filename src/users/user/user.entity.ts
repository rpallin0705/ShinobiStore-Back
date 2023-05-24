import { Game } from "src/games/game/game.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToMany(() => Game, game => game.id)
    @JoinTable({ name: 'user_my_game' })
    favGames: Game[];

    @ManyToMany(() => Game, game => game.id)
    @JoinTable({ name: 'user_fav_game' })
    myGames: Game[];

}