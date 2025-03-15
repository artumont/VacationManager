import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveVacationsComponent } from './approve-vacations.component';

describe('ApproveVacationsComponent', () => {
    let component: ApproveVacationsComponent;
    let fixture: ComponentFixture<ApproveVacationsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ApproveVacationsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ApproveVacationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
