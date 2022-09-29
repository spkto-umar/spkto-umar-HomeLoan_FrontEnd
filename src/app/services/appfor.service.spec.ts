import { TestBed } from '@angular/core/testing';

import { AppforService } from './appfor.service';

describe('AppforService', () => {
  let service: AppforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
