import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaOperacaoComponent } from './ultima-operacao.component';

describe('UltimaOperacaoComponent', () => {
  let component: UltimaOperacaoComponent;
  let fixture: ComponentFixture<UltimaOperacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimaOperacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimaOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
