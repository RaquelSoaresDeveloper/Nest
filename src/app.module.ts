import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { tema } from './tema/entities/tema.entities';
import { temaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoalq1',
      entities: [Postagem,tema],
      synchronize: true
    }),
      PostagemModule,
      temaModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
