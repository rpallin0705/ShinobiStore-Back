import { User } from "src/users/user/user.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarjeta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ length: 19 })
    n_tarjeta: string;

    @Column()
    cvv: number;

    @Column({ length: 5 })
    f_caducidad: string;

    @ManyToOne(() => User, user => user.id)
    user: number;


}
