import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExamResultsComponent } from './all-exam-results.component';

describe('AllExamResultsComponent', () => {
  let component: AllExamResultsComponent;
  let fixture: ComponentFixture<AllExamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExamResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
