import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingVacationsComponent } from './ongoing-vacations.component';

describe('OngoingVacationsComponent', () => {
  let component: OngoingVacationsComponent;
  let fixture: ComponentFixture<OngoingVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingVacationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
