import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game{
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

} 
