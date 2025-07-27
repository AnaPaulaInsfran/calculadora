export class Calculadora {

  public valorA: number;
  public valorB: number;
  public resultado: number;
  public operacao: Operacao;

  constructor() {
    this.valorA = 0;
    this.valorB = 0;
    this.resultado = 0;
    this.operacao = Operacao.SOMA; // Valor padrão
  }


  private soma(a: number, b: number): number {
    return a + b;
  }

  private subtracao(a: number, b: number): number {
    return a - b;
  }

  private multiplicacao(a: number, b: number): number {
    return a * b;
  }

  private divisao(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Divisão por zero não permitida');
    }
    return a / b;
  }

  private Calcular(a: number, b: number, operacao: string): number {
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

  fazerCalculo() {
    if (this.valorA !== null && this.valorB !== null) {
      this.resultado = this.Calcular(this.valorA, this.valorB, this.operacao);
    }
  }

  limparCampos(campo: 'A' | 'B') {

    if (campo === 'A') {
      this.valorA = 0;
    } else {
      this.valorB = 0;
    }
    this.resultado = 0;
  }
}

export enum Operacao {
  SOMA = 'Soma',
  SUBTRACAO = 'Subtração',
  MULTIPLICACAO = 'Multiplicação',
  DIVISAO = 'Divisão'

}