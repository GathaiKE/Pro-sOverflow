import { TestBed } from '@angular/core/testing';

import { QuestionEffectsService } from './question-effects.service';

describe('QuestionEffectsService', () => {
  let service: QuestionEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
