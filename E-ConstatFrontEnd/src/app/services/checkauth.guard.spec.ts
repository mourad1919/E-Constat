import { TestBed } from '@angular/core/testing';

import { CheckauthGuard } from './checkauth.guard';

describe('CheckauthGuard', () => {
  let guard: CheckauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
