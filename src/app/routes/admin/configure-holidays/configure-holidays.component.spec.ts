import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureHolidaysComponent } from './configure-holidays.component';

describe('ConfigureHolidaysComponent', () => {
  let component: ConfigureHolidaysComponent;
  let fixture: ComponentFixture<ConfigureHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigureHolidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
