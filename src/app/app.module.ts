import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { RodapeComponent } from './rodape/rodape.component';
import { VersaoComponent } from './versao/versao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    RodapeComponent,
    VersaoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
