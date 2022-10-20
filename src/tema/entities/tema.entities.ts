import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"})
export class tema{
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column({length: 100,nullable:false})
    descricao: string

    
    @OneToMany(() => Postagem, (Postagem) =>Postagem.Tema)
    postagem: Postagem[]
}