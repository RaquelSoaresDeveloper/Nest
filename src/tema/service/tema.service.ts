import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { tema } from "src/tema/entities/tema.entities";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class temaService {
    constructor(
@InjectRepository(tema)
private temaRepository: Repository<tema>
     ) { }

     
async findAll(): Promise<tema[]> {
return await this.temaRepository.find({
    relations: {
    postagem: true
}
}) 
}
     
     
async findById(id: number): Promise<tema> {
let tema = await this.temaRepository.findOne({
    where: {
    id
},
  relations: {
  postagem: true
}
})
     
if (!tema)
throw new HttpException('Tema não existe', HttpStatus.NOT_FOUND)
     
return tema
}
     
async findByDescricao(descricao: string): Promise<tema[]> {
    return await this.temaRepository.find({
    where: {
    descricao: ILike(`%${descricao}%`)
},
    relations: {
    postagem: true
                 }
             })
         }
async create(tema: tema): Promise<tema> {
    return await this.temaRepository.save(tema)
         }
     
async update(tema: tema): Promise<tema> {
let buscarTema= await this.findById(tema.id)
     
if (!buscarTema || !buscarTema.id)
throw new HttpException('Tema Não Existe', HttpStatus.NOT_FOUND)
     
return await this.temaRepository.save(tema)
}
     
async delete(id: number): Promise<DeleteResult> {
    let buscarTema = await this.findById(id)
     
    if (!buscarTema)
    throw new HttpException('Tema não encontrada', HttpStatus.NOT_FOUND)
     
    return await this.temaRepository.delete(id)


} 
}