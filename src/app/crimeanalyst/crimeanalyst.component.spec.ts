import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeanalystComponent } from './crimeanalyst.component';

describe('CrimeanalystComponent', () => {
  let component: CrimeanalystComponent;
  let fixture: ComponentFixture<CrimeanalystComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrimeanalystComponent]
    });
    fixture = TestBed.createComponent(CrimeanalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
