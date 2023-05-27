import { InjectRepository } from "@nestjs/typeorm";
import { Stock } from "src/stock/entities/stock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Repository, } from "typeorm";

@Entity()
export class Game {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    plataforma: string;

    @Column()
    genero: string;

    @Column()
    precio: number;

    @Column()
    descuento: number;


    @Column()
    image: string;

    @Column()
    image_port: string;

    @Column({ default: 0 })
    n_stock: number;

    @OneToMany(() => Stock, stock => stock.game)
    stock: Stock[];


    
}
