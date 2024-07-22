import { TestBed } from '@angular/core/testing';

import { SavePersonneAchargeService } from './save-personne-acharge.service';

describe('SavePersonneAchargeService', () => {
  let service: SavePersonneAchargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePersonneAchargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
