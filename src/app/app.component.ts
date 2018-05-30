import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public filtros = [{ componente: "app-operacao-diaria", param: 5 },
  { componente: "app-ultima-operacao", param: null }];

  public filtroPesquisaDiaria(result: any) {
    console.log(result);
  }
}
