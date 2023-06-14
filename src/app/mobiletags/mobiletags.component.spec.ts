import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletagsComponent } from './mobiletags.component';

describe('MobiletagsComponent', () => {
  let component: MobiletagsComponent;
  let fixture: ComponentFixture<MobiletagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MobiletagsComponent]
    });
    fixture = TestBed.createComponent(MobiletagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
