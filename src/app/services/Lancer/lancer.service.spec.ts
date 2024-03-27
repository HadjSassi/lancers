import { TestBed } from '@angular/core/testing';

import { LancerService } from './lancer.service';

describe('LancerService', () => {
  let service: LancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
