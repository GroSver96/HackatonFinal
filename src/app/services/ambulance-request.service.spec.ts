import { TestBed } from '@angular/core/testing';

import { AmbulanceRequestService } from './ambulance-request.service';

describe('AmbulanceRequestService', () => {
  let service: AmbulanceRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulanceRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
