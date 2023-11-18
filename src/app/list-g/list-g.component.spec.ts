import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGComponent } from './list-g.component';

describe('ListGComponent', () => {
  let component: ListGComponent;
  let fixture: ComponentFixture<ListGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGComponent]
    });
    fixture = TestBed.createComponent(ListGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
