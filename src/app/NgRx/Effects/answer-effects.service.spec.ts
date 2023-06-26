import { TestBed } from '@angular/core/testing';

import { AnswerEffectsService } from './answer-effects.service';

describe('AnswerEffectsService', () => {
  let service: AnswerEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
