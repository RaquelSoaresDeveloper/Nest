import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { temaController } from "src/tema/controller/tema.controller";
import { tema } from "src/tema/entities/tema.entities";
import { temaService } from "src/tema/service/tema.service";

@Module({
     imports:[TypeOrmModule.forFeature([tema])],
     providers:[temaService],
     controllers:[temaController],
     exports:[TypeOrmModule],
     

})
export class temaModule { }
