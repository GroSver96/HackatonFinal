import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeParamedicoComponent } from './reque-paramedico.component';

describe('RequeParamedicoComponent', () => {
  let component: RequeParamedicoComponent;
  let fixture: ComponentFixture<RequeParamedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequeParamedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequeParamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
