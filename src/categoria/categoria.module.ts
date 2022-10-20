import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaService } from "src/categoria/service/categoria.service";
import { categoriaController } from "./controller/categoria.cotroller";
import { Categoria } from "./entities/categoria.entity";

@Module({
     imports:[TypeOrmModule.forFeature([Categoria])],
     providers:[categoriaService],
     controllers:[categoriaController],
     exports:[TypeOrmModule],
     

})
export class CategoriaModule { }