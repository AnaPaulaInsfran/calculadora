import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  opcoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];
  selecionado = 'Soma';
  valorA: number | null = null;
  valorB: number | null = null;
  resultado: number | null = null;

  fazerCalculo() {
    if (this.valorA !== null && this.valorB !== null) {
      switch (this.selecionado) {
        case 'Soma':
          this.resultado = this.soma(this.valorA, this.valorB);
          break;
        case 'Subtração':
          this.resultado = this.subtracao(this.valorA, this.valorB);
          break;  
        case 'Multiplicação':
          this.resultado = this.multiplicacao(this.valorA, this.valorB);
          break;
        case 'Divisão':
          this.resultado = this.divisao(this.valorA, this.valorB);
          break;    
      }
    }
  }

  soma(a: number, b: number) {
    return a + b;
  }

  subtracao(a: number, b: number) {
    return a - b;
  }

  multiplicacao(a: number, b: number) {
    return a * b;
  }

  divisao(a: number, b: number) {
    return a / b;
  }

}
