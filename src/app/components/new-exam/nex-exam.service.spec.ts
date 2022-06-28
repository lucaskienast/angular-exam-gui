import { TestBed } from '@angular/core/testing';

import { NexExamService } from './nex-exam.service';

describe('NexExamService', () => {
  let service: NexExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NexExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
