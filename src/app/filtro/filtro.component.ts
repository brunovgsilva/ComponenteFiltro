import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';

import { OperacaoDiariaComponent } from './operacao-diaria/operacao-diaria.component'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements AfterViewInit, OnInit {

  constructor() { }

  @Output() filtroUltimaOperacaoRealizado: EventEmitter<any> = new EventEmitter<any>()
  @Output() filtroOperacaoDiariaRealizado: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild("operDiaria") public filtroDiario: OperacaoDiariaComponent;

  @Input() filtros;

  ngAfterViewInit() {
    if (this.filtroDiario != null)
      this.filtroDiario.subscription = this.filtroDiario.obsFind.subscribe((result: Array<any>) => {
        this.filtroOperacaoDiariaRealizado.emit(result);
      })
  }

  ngOnInit() {

  }

}
