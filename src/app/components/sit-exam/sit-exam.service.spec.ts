import { TestBed } from '@angular/core/testing';

import { SitExamService } from './sit-exam.service';

describe('SitExamService', () => {
  let service: SitExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
