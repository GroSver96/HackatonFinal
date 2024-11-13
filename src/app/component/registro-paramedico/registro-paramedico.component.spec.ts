import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroParamedicoComponent } from './registro-paramedico.component';

describe('RegistroParamedicoComponent', () => {
  let component: RegistroParamedicoComponent;
  let fixture: ComponentFixture<RegistroParamedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroParamedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroParamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
