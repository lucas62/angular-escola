import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {TipoDeOcorrencia} from "./tipo-de-ocorrencia.model";
import {Ocorrencia} from "./ocorrencia.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ocorrencias = [];
  aluno_matricula = null;
  aluno_nome = null;
  data = null;
  pai_ou_responsavel_compareceu = false;
  pai_ou_responsavel_nome = null;
  tipo = null;
  observacao = null;
  salvar_ok = false;
  dataDe : Date;
  dataAte : Date;
  cont_dataD = 0;
  cont_dataA = 0;

  contadoresData = [0,0,0,0];
  contadores = [0, 0, 0, 0];
  porcentagens = [0, 0, 0, 0];
  cont_abril = 0;
  cont_marco = 0;
  relacao_ocorrencias = 0;
  verde = null;

  tipos = [
    new TipoDeOcorrencia(0, 'indisciplina em sala de aula'),
    new TipoDeOcorrencia(1, 'comportamento inadequado com colegas'),
    new TipoDeOcorrencia(2, 'baixo índice de rendimento'),
    new TipoDeOcorrencia(3, 'indicação de atenção por assunto familiar, psicológico ou social')
  ];

  salvar() {
    const ocorrencia = new Ocorrencia(this.aluno_matricula,
      this.aluno_nome,
      this.data,
      this.pai_ou_responsavel_compareceu,
      this.pai_ou_responsavel_nome,
      this.observacao,
      this.tipo);
    this.ocorrencias.push(ocorrencia);
    this.salvar_ok = true;
    this.atualizarEstatisticas();
    this.iniciar();
  }


  atualizarEstatisticas() {
    this.contadores = [0, 0, 0, 0];
    this.cont_abril = 0;
    this.cont_marco = 0;
    this.verde = null;
    for (var i = 0; i < this.ocorrencias.length; i++) {
      this.contadores[this.ocorrencias[i].tipo]++;
      if (this.ocorrencias[i].data.indexOf("-04-") != -1) {
        this.cont_abril++;
      }
      if (this.ocorrencias[i].data.indexOf('-03-') != -1) {
        this.cont_marco++;
      }
    }
    if (this.cont_marco != 0) {
      this.relacao_ocorrencias = (this.cont_abril - this.cont_marco)/this.cont_marco * 100;
      if (this.relacao_ocorrencias >= 0){
        this.verde = true;
      }
      else{
        this.verde = false;
      }
    }
    for (var i = 0; i < 4; i++) {
      this.porcentagens[i] = this.contadores[i] / this.ocorrencias.length * 100;
    }
  }

  estatisticaPorData(){
    this.contadoresData = [0, 0, 0, 0];
    this.contadoresData[this.ocorrencias[d].tipo]++;
    for (var i = this.dataDe.getDay(); i <= 31; i++){
      for (var d = 0; d < this.ocorrencias.length; d++) {
        if (this.ocorrencias[d].data.indexOf('-'+this.dataDe.getMonth()+'-') != -1 && this.ocorrencias[d].data.indexOf('-'+i+'-') != -1 ) {
          this.cont_dataD++;
        }
      }
    }
    for (var i = this.dataAte.getDay(); i >= 1; i--){
      for (var d = 0; d < this.ocorrencias.length; d++) {
        if (this.ocorrencias[d].data.indexOf('-'+this.dataDe.getMonth()+'-') != -1 && this.ocorrencias[d].data.indexOf('-'+i+'-') != -1) {
          this.cont_dataA++;
        }
      }
    }
  }

  cancelar() {
    this.iniciar();
    this.salvar_ok = false;
  }

  iniciar() {
    this.aluno_matricula = null;
    this.aluno_nome = null;
    this.data = null;
    this.pai_ou_responsavel_compareceu = false;
    this.pai_ou_responsavel_nome = null;
    this.tipo = null;
    this.observacao = null;
  }
}