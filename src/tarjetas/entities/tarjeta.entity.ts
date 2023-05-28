import { User } from "src/users/user/user.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarjeta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreApellidos: string;

    @Column({ length: 19 })
    n_tarjeta: string;

    @Column({ length: 3 })
    num_Seg: string;

    @Column({ length: 5 })
    f_caducidad: string;

    @ManyToOne(() => User, user => user.id)
    user: User;
 

}
