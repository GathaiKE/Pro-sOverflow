import { TestBed } from '@angular/core/testing';

import { AdminEffectsService } from './admin-effects.service';

describe('AdminEffectsService', () => {
  let service: AdminEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
