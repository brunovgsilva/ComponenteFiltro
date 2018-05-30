import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import { Subscription } from 'rxjs/Subscription'
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-operacao-diaria',
  templateUrl: './operacao-diaria.component.html',
  styleUrls: ['./operacao-diaria.component.css']
})
export class OperacaoDiariaComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() dias: number;

  public obsFind: Observable<any>;
  private subjectPesquisa: Subject<number> = new Subject<number>()
  public subscription: Subscription;

  ngOnInit() {
    this.inicializaObjetoPesquisa();
  }

  ngOnDestroy() {
    if (this.subscription != null)
      this.subscription.unsubscribe();
  }

  public inicializaObjetoPesquisa() {
    this.obsFind = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((qtdeDias: number) => {
        let lastOper = new Array<any>();
        lastOper.push({ nomeCliente: "Cliente 01", nomeConta: "Conta 01" });
        lastOper.push({ nomeCliente: "Cliente 02", nomeConta: "Conta 02" });
        lastOper.push({ nomeCliente: "Cliente 03", nomeConta: "Conta 03" });
        return Observable.of<Array<any>>(lastOper);
      }).catch((erro: any) => {
        console.log('Chamada do catch ' + erro); return Observable.of<any>([])
      });
  }

  public filtarDados() {
    this.subjectPesquisa.next(this.dias);
  }
}
