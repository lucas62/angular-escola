import {Professor} from './professor.model';
export class Disciplina {
  cod: number;
  nome: string;
  professor: Professor;
  descricao: string;

  constructor(cod: number,nome: string,professor: Professor,descricao?: string) {
    this.cod = cod;
    this.nome = nome;
    this.professor = professor;
    this.descricao = descricao;
  }
}
