import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastVacationsComponent } from './past-vacations.component';

describe('PastVacationsComponent', () => {
  let component: PastVacationsComponent;
  let fixture: ComponentFixture<PastVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastVacationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
