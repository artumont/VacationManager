import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-request-vacations',
    imports: [ReactiveFormsModule],
    templateUrl: './request-vacations.component.html',
})
export class RequestVacationsComponent {
    vacationForm: FormGroup;

    constructor(private fb: FormBuilder) {

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        this.vacationForm = this.fb.group({
            reason: ['', Validators.required],
            startDate: [today.toISOString().split('T')[0], Validators.required],
            endDate: [tomorrow.toISOString().split('T')[0], Validators.required]
        });
    }

    requestVacation() {
        if (this.vacationForm.valid) {
            // @note: On a real application, this would be a service call to the backend, for now we will just log the data
            console.log('Form Data:', this.vacationForm.value);
            alert('Vacation Requested!\nCheck the console for the form data.');
        }
    }
}