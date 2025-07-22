export class Calculadora {

  soma(a: number, b: number): number {
    return a + b;
  }

  subtracao(a: number, b: number): number {
    return a - b;
  }

  multiplicacao(a: number, b: number): number {
    return a * b; 
  }

  divisao(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Divisão por zero não permitida');
    }
    return a / b;
  }

  fazerCalculo(a: number, b:number, operacao: string): number {
      switch (operacao) {
        case 'Soma':
          return this.soma(a, b);
        case 'Subtração':
          return this.subtracao(a, b);
        case 'Multiplicação':
          return this.multiplicacao(a, b);
        case 'Divisão':
          return this.divisao(a, b);
        default:
          throw new Error('Operação inválida');
      }
  
  }
}