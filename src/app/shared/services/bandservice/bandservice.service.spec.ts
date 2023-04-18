import { TestBed } from '@angular/core/testing';

import { BandService } from './bandservice.service';

describe('BandService', () => {
  let service: BandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
