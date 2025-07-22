import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculadora } from './model/calculadora';

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

  novaCalculadora:  Calculadora = new Calculadora();

  opcoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];
  selecionado = 'Soma';
  valorA: number | null = null;
  valorB: number | null = null;
  resultado: number | null = null;

  fazerCalculo() {
    if (this.valorA !== null && this.valorB !== null) {
      this.resultado = this.novaCalculadora.fazerCalculo(this.valorA, this.valorB, this.selecionado)
    }
  }

  limparCampos(campo: 'A' | 'B') {
  if (campo === 'A') {
    this.valorA = null;
  } else {
    this.valorB = null;
  }
  this.resultado = null;
  }
}
