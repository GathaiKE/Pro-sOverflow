import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailsComponent } from './question-details.component';

describe('QuestionDetailsComponent', () => {
  let component: QuestionDetailsComponent;
  let fixture: ComponentFixture<QuestionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionDetailsComponent]
    });
    fixture = TestBed.createComponent(QuestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
