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

    @ManyToMany(() => Game)
    @JoinTable({
        name: 'user_fav_games',
        joinColumn: { name: 'user_id' },
        inverseJoinColumn: { name: 'game_id' },
    })
    favGames: Game[];

    
}