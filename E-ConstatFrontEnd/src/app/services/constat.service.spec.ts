import { TestBed } from '@angular/core/testing';

import { ConstatService } from './constat.service';

describe('ConstatService', () => {
  let service: ConstatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
