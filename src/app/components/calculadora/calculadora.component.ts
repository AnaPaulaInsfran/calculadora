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
 
  

 
}
