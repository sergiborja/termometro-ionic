import { TestBed } from '@angular/core/testing';

import { RetrieveUserService } from './retrieve-user.service';

describe('RetrieveUserService', () => {
  let service: RetrieveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
