import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({
        type: 'decimal',
        precision: 2})
    descuento: number;

    @Column()
    precio_descuento: number;

    @Column()
    image: string;
} 
