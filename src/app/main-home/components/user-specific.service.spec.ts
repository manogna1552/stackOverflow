import { TestBed } from '@angular/core/testing';

import { UserSpecificService } from './user-specific.service';

describe('UserSpecificService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSpecificService = TestBed.get(UserSpecificService);
    expect(service).toBeTruthy();
  });
});
