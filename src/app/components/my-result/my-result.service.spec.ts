import { TestBed } from '@angular/core/testing';

import { MyResultService } from './my-result.service';

describe('MyResultService', () => {
  let service: MyResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
