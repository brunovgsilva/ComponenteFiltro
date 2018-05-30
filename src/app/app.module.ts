import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FiltroComponent } from './filtro/filtro.component';
import { UltimaOperacaoComponent } from './filtro/ultima-operacao/ultima-operacao.component';
import { OperacaoDiariaComponent } from './filtro/operacao-diaria/operacao-diaria.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    UltimaOperacaoComponent,
    OperacaoDiariaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
