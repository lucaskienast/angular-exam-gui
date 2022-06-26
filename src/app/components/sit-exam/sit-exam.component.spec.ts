import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitExamComponent } from './sit-exam.component';

describe('SitExamComponent', () => {
  let component: SitExamComponent;
  let fixture: ComponentFixture<SitExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
