import { TestBed } from '@angular/core/testing';

import { PostQuestionService } from './post-question.service';

describe('PostQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostQuestionService = TestBed.get(PostQuestionService);
    expect(service).toBeTruthy();
  });
});
