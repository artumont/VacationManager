import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Plus, Minus, Pencil, Check } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-configure-holidays',
    imports: [ReactiveFormsModule, NgFor, NgClass, LucideAngularModule],
    templateUrl: './configure-holidays.component.html',
})
export class ConfigureHolidaysComponent {
    readonly PlusIcon = Plus;
    readonly MinusIcon = Minus;
    readonly EditIcon = Pencil;
    readonly CheckIcon = Check;

    years: {year: string, dates: string[]}[] = [
        {year: '2021', dates: ['2021-01-01', '2021-12-31']},
        {year: '2022', dates: ['2022-01-01', '2022-12-31']},
        {year: '2023', dates: ['2023-01-01', '2023-12-31']},
        {year: '2024', dates: ['2024-01-01', '2024-12-31']},
    ];

    yearForm: FormGroup;
    editForm: FormGroup;
    showEditForm = false;
    currentYear: string = 'none';
    
    constructor(private fb: FormBuilder) {
        this.yearForm = this.fb.group({
            year: ['2025', Validators.required],
        });

        this.editForm = this.fb.group({
            dates: ['2025-01-01', Validators.required],
        });
    }

    addYear() {
        if (this.yearForm.valid) {
            // @note: On a real application, this would be a service call to the backend, for now we will just log the data and add it to a list in frontend
            this.years.push({year: this.yearForm.value.year, dates: [`${this.yearForm.value.year}-01-01`, `${this.yearForm.value.year}-12-31`]});
            console.log('Form Data:', this.yearForm.value);
            alert(`Year Added!\n\n${Object.entries(this.yearForm.value).map(([key, value]) => `${key}: ${value}`).join('\n')}`);
        }
    }

    deleteYear(year: string) {
        if (this.yearForm.valid) {
            // @note: On a real application, this would be a service call to the backend, for now we will just log the data and remove it from the list in frontend
            
            if (year == this.currentYear) {
                this.showEditForm = false;
                this.currentYear = 'none';
            }

            this.years = this.years.filter(y => y.year !== year)
            console.log('Form Data:', this.yearForm.value);
            alert(`Year Removed!\n\n${Object.entries(this.yearForm.value).map(([key, value]) => `${key}: ${value}`).join('\n')}`);
        }
    }

    editUIToggle(year: string) {
        this.showEditForm = true;
        this.currentYear = year;
        const foundYear = this.years.find(y => y.year === year);
        if (foundYear) {
            this.editForm.patchValue({dates: foundYear.dates});
        }
    }

    editYear() {
        if (this.editForm.valid) {
            // @note: On a real application, this would be a service call to the backend, for now we will just log the data and update the list in frontend
            const foundYear = this.years.find(y => y.year === this.currentYear);
            if (foundYear) {
                foundYear.dates = this.editForm.value.dates;
            }
            else {
                alert('Year not found!');
            }
            this.showEditForm = false;
            this.currentYear = 'none';
            console.log('Form Data:', this.editForm.value);
            alert(`Year Edited!\n\n${Object.entries(this.editForm.value).map(([key, value]) => `${key}: ${value}`).join('\n')}`);
        }
    }
}
