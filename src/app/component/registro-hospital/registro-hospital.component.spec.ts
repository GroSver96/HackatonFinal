import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHospitalComponent } from './registro-hospital.component';

describe('RegistroHospitalComponent', () => {
  let component: RegistroHospitalComponent;
  let fixture: ComponentFixture<RegistroHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroHospitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
