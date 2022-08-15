import { TestBed } from '@angular/core/testing';

import { AjoutMaladieService } from './ajout-maladie.service';

describe('AjoutMaladieService', () => {
  let service: AjoutMaladieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutMaladieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
