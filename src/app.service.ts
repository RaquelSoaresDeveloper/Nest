import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWord(): string {
    return 'bom dia!';
  }
  getBSMs(): string {
    return 'Mentalidades:<br>Orientação ao futuro,<br>Responsabilidades pessoal,<br>Mentalidade de crescimento,<br>Persistência,<br>Habilidades:<br>Trabalho em equipe,<br>Atenção aos detalhes,<br>Proatividade,<br>comunicação';
  }
  getObjetivodeaprendizado(): string {
    return 'Mentalidade de crescimento,Proatividade  e comunicação';
  }

}
