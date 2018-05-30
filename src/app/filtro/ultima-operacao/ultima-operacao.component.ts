import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import '../../utils/rxjs-extensao'

@Component({
  selector: 'app-ultima-operacao',
  templateUrl: './ultima-operacao.component.html',
  styleUrls: ['./ultima-operacao.component.css']
})
export class UltimaOperacaoComponent implements OnInit, OnDestroy {

  constructor() { }

  public obsFind: Observable<any>;
  private subjectPesquisa: Subject<string> = new Subject<string>()
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
      .switchMap((termoBusca: string) => {
        let lastOper = new Array<any>();
        lastOper.push({ nomeCliente: "Cliente 01", nomeConta: "Conta 01" });
        lastOper.push({ nomeCliente: "Cliente 02", nomeConta: "Conta 02" });
        lastOper.push({ nomeCliente: "Cliente 03", nomeConta: "Conta 03" });
        return Observable.of<Array<string>>(lastOper);
      }).catch((erro: any) => {
        console.log('Chamada do catch ' + erro); return Observable.of<any>([])
      });

    this.subscription = this.obsFind.subscribe((result: Array<string>) => {

    })
  }

  getUltimasOperacoes(limit: number) {
    let lastOper = new Array<any>();
    lastOper.push({ nomeCliente: "Cliente 01", nomeConta: "Conta 01" });
    lastOper.push({ nomeCliente: "Cliente 02", nomeConta: "Conta 02" });
    console.log(lastOper)
    return lastOper;
  }
}
