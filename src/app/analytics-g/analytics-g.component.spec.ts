import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsGComponent } from './analytics-g.component';

describe('AnalyticsGComponent', () => {
  let component: AnalyticsGComponent;
  let fixture: ComponentFixture<AnalyticsGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsGComponent]
    });
    fixture = TestBed.createComponent(AnalyticsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
