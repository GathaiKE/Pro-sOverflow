import { TestBed } from '@angular/core/testing';

import { UserEffectaService } from './user-effecta.service';

describe('UserEffectaService', () => {
  let service: UserEffectaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEffectaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
