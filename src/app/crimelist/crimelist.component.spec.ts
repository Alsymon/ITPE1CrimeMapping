import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimelistComponent } from './crimelist.component';

describe('CrimelistComponent', () => {
  let component: CrimelistComponent;
  let fixture: ComponentFixture<CrimelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimelistComponent]
    });
    fixture = TestBed.createComponent(CrimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
