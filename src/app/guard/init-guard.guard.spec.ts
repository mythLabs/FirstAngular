import { TestBed, async, inject } from '@angular/core/testing';

import { InitGuardGuard } from './init-guard.guard';

describe('InitGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitGuardGuard]
    });
  });

  it('should ...', inject([InitGuardGuard], (guard: InitGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
