import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class categoriaService {
    categoriaRepository: any;
    constructor(
     ) { }

     
async findAll(): Promise<Categoria[]> {
return await this.categoriaRepository.find({
    relations: {
    Categoria: true
}
}) 
}
     
     
async findById(id: number): Promise<Categoria> {
let categoria = await this.categoriaRepository.findOne({
    where: {
    id
},
  relations: {
  produto: true
}
})
     
if (!categoria)
throw new HttpException('Categoria não existe', HttpStatus.NOT_FOUND)
     
return categoria
}
     
async findByDescricao(descricao: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
    where: {
    descricao: ILike(`%${descricao}%`)
},
    relations: {
    postagem: true
                 }
             })
         }
async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(Categoria)
         }
     
async update(categoria: Categoria): Promise<Categoria> {
let buscarcategoria= await this.findById(categoria.id)
     
if (!buscarcategoria || !buscarcategoria.id)
throw new HttpException('categoria Não Existe', HttpStatus.NOT_FOUND)
     
return await this.categoriaRepository.save(categoria)
}
     
async delete(id: number): Promise<DeleteResult> {
    let buscarcategoria = await this.findById(id)
     
    if (!buscarcategoria)
    throw new HttpException('Tema não encontrada', HttpStatus.NOT_FOUND)
     
    return await this.categoriaRepository.delete(id)


} 
}