import { IsNotEmpty, maxLength, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import {Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name: "tb_produto"})
export class Produto{
  @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(200)
    @Column({length: 200, nullable: false})
    Nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    classe: string

    @IsNotEmpty()
    @MaxLength(50)
    @Column({type: 'decimal',precision:5,scale: 2, })
    GB: number

    @ManyToOne(() => Categoria, (categoria) => categoria.produto)
         
    
         categoria: Categoria []
    }