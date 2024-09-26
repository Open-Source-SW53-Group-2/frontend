import { TestBed } from '@angular/core/testing';

import { TripsService } from './trips-api.service';

describe('TripsApiService', () => {
  let service: TripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
