import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVacationsComponent } from './request-vacations.component';

describe('RequestVacationsComponent', () => {
    let component: RequestVacationsComponent;
    let fixture: ComponentFixture<RequestVacationsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RequestVacationsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(RequestVacationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
