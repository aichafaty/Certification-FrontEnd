import { TestBed } from '@angular/core/testing';

import { InfirmierGuard } from './infirmier.guard';

describe('InfirmierGuard', () => {
  let guard: InfirmierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfirmierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
