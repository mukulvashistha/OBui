import { TestBed } from '@angular/core/testing';

import { CardrequestService } from './cardrequest.service';

describe('CardrequestService', () => {
  let service: CardrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
