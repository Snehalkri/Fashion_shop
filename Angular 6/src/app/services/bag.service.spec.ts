import { TestBed, inject } from '@angular/core/testing';

import { BagService } from './bag.service';

describe('BagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BagService]
    });
  });

  it('should be created', inject([BagService], (service: BagService) => {
    expect(service).toBeTruthy();
  }));
});
