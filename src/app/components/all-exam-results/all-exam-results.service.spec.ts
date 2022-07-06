import { TestBed } from '@angular/core/testing';

import { AllExamResultsService } from './all-exam-results.service';

describe('AllExamResultsService', () => {
  let service: AllExamResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllExamResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
