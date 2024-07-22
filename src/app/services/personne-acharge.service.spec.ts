import { TestBed } from '@angular/core/testing';

import { PersonneAchargeService } from './personne-acharge.service';

describe('PersonneAchargeService', () => {
  let service: PersonneAchargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneAchargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
