import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apolice-seguro-form',
  templateUrl: './apolice-seguro-form.component.html',
  styleUrls: ['./apolice-seguro-form.component.css']
})

export class ApoliceSeguroComponent implements OnInit{
  nomeSegurado: string|any;
  sexo: string|any;
  idade: number|any;
  valorAutomovel: number|any;
  valorApolice: number|any;

  constructor(){}

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = 0.15 * this.valorAutomovel;
      } else {
        this.valorApolice = 0.1 * this.valorAutomovel;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = 0.08 * this.valorAutomovel;
    } else {
    }
  }
}
