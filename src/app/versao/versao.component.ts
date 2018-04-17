import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-versao',
  templateUrl: './versao.component.html',
  styleUrls: ['./versao.component.css']
})
export class VersaoComponent implements OnInit {
  @Input()
  maior = null;
  @Input()
  funcionalidade = null;
  @Input()
  menor = null;

  versao_completa = null;
  maiorB: boolean = null;
  funcB: boolean = null;
  menorB: boolean = null;

  constructor() { }

  ngOnInit() {
    
    if (this.maior >= 1 && this.maior <= 10){
      this.maiorB = true;
    }
    if (this.funcionalidade >= 0 && this.funcionalidade <= 10){
      this.funcB = true;
    }
    if (this.menor >= 0 && this.menor <= 100){
      this.menorB = true;
    }
    if (this.funcB && this.maiorB && this.menorB){
      this.versao_completa = this.maior + '.' + this.funcionalidade +'.'+ this.menor;
    }
    else{
      this.versao_completa = 'Versão atual incorreta!'
    }
    
  }

}
