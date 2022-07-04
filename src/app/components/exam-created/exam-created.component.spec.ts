import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCreatedComponent } from './exam-created.component';

describe('ExamCreatedComponent', () => {
  let component: ExamCreatedComponent;
  let fixture: ComponentFixture<ExamCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
