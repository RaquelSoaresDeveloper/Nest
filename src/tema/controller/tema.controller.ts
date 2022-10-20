import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { tema } from "src/tema/entities/tema.entities";
import { temaService } from "src/tema/service/tema.service";

@Controller('/tema')
export class temaController{
    constructor(private readonly temaService: temaService){
        
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<tema[]> {
        return this.temaService.findAll();
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<tema> {
        return this.temaService.findById(id)
    }

@Get('/descricao/:descricao')
@HttpCode(HttpStatus.OK)
findByDescricao(@Param('descricao') descricao: string): Promise<tema[]> {
        return this.temaService.findByDescricao(descricao)
    }

@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() tema: tema): Promise<tema> {
return this.temaService.create(tema)
    }

@Put()
@HttpCode(HttpStatus.OK)
update(@Body() tema: tema): Promise<tema> {
return this.temaService.update(tema)
    }


@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number) {
return this.temaService.delete(id)
    
} 
}