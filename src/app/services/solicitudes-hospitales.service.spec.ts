import { TestBed } from '@angular/core/testing';

import { SolicitudesHospitalesService } from './solicitudes-hospitales.service';

describe('SolicitudesHospitalesService', () => {
  let service: SolicitudesHospitalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesHospitalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
