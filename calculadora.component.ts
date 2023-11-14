import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  number1: number|any;
  number2: number|any;
  selectedOperator: string = 'add';
  result: number|any;

  constructor(){}
  
  calculate() {
    switch (this.selectedOperator) {
      case 'add':
        this.result = this.number1 + this.number2;
        break;
      case 'subtract':
        this.result = this.number1 - this.number2;
        break;
      case 'multiply':
        this.result = this.number1 * this.number2;
        break;
      case 'divide':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = null;
        break;
    }
  }
}
