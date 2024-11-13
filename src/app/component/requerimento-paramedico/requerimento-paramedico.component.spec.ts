import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoParamedicoComponent } from './requerimento-paramedico.component';

describe('RequerimentoParamedicoComponent', () => {
  let component: RequerimentoParamedicoComponent;
  let fixture: ComponentFixture<RequerimentoParamedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequerimentoParamedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentoParamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
