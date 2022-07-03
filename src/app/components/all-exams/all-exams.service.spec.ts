import { TestBed } from '@angular/core/testing';

import { AllExamsService } from './all-exams.service';

describe('AllExamsService', () => {
  let service: AllExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
