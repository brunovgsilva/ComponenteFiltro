import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacaoDiariaComponent } from './operacao-diaria.component';

describe('OperacaoDiariaComponent', () => {
  let component: OperacaoDiariaComponent;
  let fixture: ComponentFixture<OperacaoDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacaoDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacaoDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
