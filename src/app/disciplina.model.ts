export class Disciplina {
  codigo: number;
  nome: string;
  descricao: string;

  constructor(codigo: number, nome: string, descricao?: string) {
    this.codigo= codigo;
    this.nome = nome;
    this.descricao = descricao;
  }
}
