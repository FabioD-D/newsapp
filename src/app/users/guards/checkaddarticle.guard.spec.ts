import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkaddarticleGuard } from './checkaddarticle.guard';

describe('checkaddarticleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkaddarticleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
