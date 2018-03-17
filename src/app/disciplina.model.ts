import { Attribute } from "@angular/core/src/metadata/di";

export class Disciplina {
  codigo: number;
  nome: string;
  descricao: string;
  data: Date;
  ativa: boolean;
  tipo: string;
  periodo: any;

  constructor(codigo: number, nome: string, descricao?: string, data?: Date, ativa?: boolean, tipo?: string, periodo?: any) {
    this.codigo= codigo;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.ativa = ativa;
    this.tipo = tipo;
    this.periodo = periodo;
  }
}
