import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculo-media',
  templateUrl: './calculo-media.component.html',
  styleUrls: ['./calculo-media.component.css']
})


export class CalculoMediaComponent implements OnInit {
  ac1: number|any;
  ac2: number|any;
  ag: number|any;
  af: number|any;
  media: number|any;
  resultado: string|any;

  constructor(){}

  calcularMedia() {
    if (this.saoNotasValidas()) {
      this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);

      this.resultado = this.media >= 5 ? 'APROVADO' : 'RECUPERAÇÃO';
    } else {
      this.resultado = 'Informe notas válidas (entre 0 e 10) para todas as avaliações.';
    }
  }

  private saoNotasValidas(): boolean {
    return (
      this.ehNotaValida(this.ac1) &&
      this.ehNotaValida(this.ac2) &&
      this.ehNotaValida(this.ag) &&
      this.ehNotaValida(this.af)
    );
  }

  private ehNotaValida(nota: number): boolean {
    return !isNaN(nota) && nota >= 0 && nota <= 10;
  }
}
