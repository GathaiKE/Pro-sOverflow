import { TestBed } from '@angular/core/testing';

import { CommentEffectsService } from './comment-effects.service';

describe('CommentEffectsService', () => {
  let service: CommentEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
