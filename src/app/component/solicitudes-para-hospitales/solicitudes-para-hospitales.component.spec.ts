import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesParaHospitalesComponent } from './solicitudes-para-hospitales.component';

describe('SolicitudesParaHospitalesComponent', () => {
  let component: SolicitudesParaHospitalesComponent;
  let fixture: ComponentFixture<SolicitudesParaHospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudesParaHospitalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesParaHospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
