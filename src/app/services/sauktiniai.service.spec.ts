import { TestBed } from '@angular/core/testing';

import { SauktiniaiService } from './sauktiniai.service';

describe('SauktiniaiService', () => {
  let service: SauktiniaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SauktiniaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
