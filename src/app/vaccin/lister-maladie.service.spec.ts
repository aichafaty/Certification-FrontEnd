import { TestBed } from '@angular/core/testing';

import { ListerMaladieService } from './lister-maladie.service';

describe('ListerMaladieService', () => {
  let service: ListerMaladieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListerMaladieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
