import { Game } from "src/games/game/game.entity";
import { BeforeInsert, BeforeRemove, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Game, game => game.id)
    game: number;

    @Column({ unique: true })
    codigo: string;

    @Column({default: true})
    activo: boolean;

    //Genera un codigo aleatorio antes de insertar una fila
    @BeforeInsert()
    generarCodigo() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let codigo = '';
        for (let i = 0; i < 16; i++) {
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            if (i % 4 === 3 && i !== 15) {
                codigo += '-';
            }
        }
        this.codigo = codigo;
    }

}

