import { TestBed } from '@angular/core/testing';

import { DepenseServiceService } from './depense-service.service';

describe('DepenseServiceService', () => {
  let service: DepenseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepenseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
