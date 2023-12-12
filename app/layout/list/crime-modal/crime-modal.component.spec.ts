import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeModalComponent } from './crime-modal.component';

describe('CrimeModalComponent', () => {
  let component: CrimeModalComponent;
  let fixture: ComponentFixture<CrimeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimeModalComponent]
    });
    fixture = TestBed.createComponent(CrimeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
