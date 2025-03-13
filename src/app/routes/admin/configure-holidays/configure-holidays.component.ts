import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Plus, Minus, Pencil, Check, X } from 'lucide-angular';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface DateRange {
    start: string;
    end: string;
    description?: string;
}

@Component({
    selector: 'app-configure-holidays',
    imports: [ReactiveFormsModule, NgFor, NgClass, NgIf, LucideAngularModule],
    templateUrl: './configure-holidays.component.html',
    styles: [`
        .date-range {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-bottom: 0.5rem;
        }
    `],
    standalone: true
})
export class ConfigureHolidaysComponent {
    readonly PlusIcon = Plus;
    readonly MinusIcon = Minus;
    readonly EditIcon = Pencil;
    readonly CheckIcon = Check;
    readonly CloseIcon = X;

    years: Array<{year: string, dates: DateRange[]}> = [
        {year: '2024', dates: [
            {start: '2023-12-31', end: '2024-01-02', description: 'New Year'},
            {start: '2024-12-25', end: '2024-12-27', description: 'Christmas'}
        ]},
    ];

    yearForm: FormGroup;
    editForm: FormGroup;
    showEditForm = false;
    currentYear: string = 'none';
    
    get dateRanges() {
        return this.editForm.get('dates') as FormArray;
    }
    
    constructor(private fb: FormBuilder) {
        this.yearForm = this.fb.group({
            year: [new Date().getFullYear().toString(), [
                Validators.required,
                Validators.min(2000),
                Validators.max(2100)
            ]],
        });

        this.editForm = this.fb.group({
            dates: this.fb.array([])
        });
    }

    createDateRange() {
        return this.fb.group({
            start: ['', Validators.required],
            end: ['', Validators.required],
            description: ['']
        });
    }

    addDateRange() {
        this.dateRanges.push(this.createDateRange());
    }

    removeDateRange(index: number) {
        this.dateRanges.removeAt(index);
    }

    addYear() {
        // @note: On a real application, this would be a service call to the backend, for now we will just log the data and add it to the list in frontend
        if (this.yearForm.valid) {
            const year = this.yearForm.value.year;
            if (this.years.some(y => y.year === year)) {
                alert('This year already exists!');
                return;
            }
            this.years.push({
                year: year,
                dates: []
            });
            this.years.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            this.yearForm.patchValue({year: (parseInt(year) + 1).toString()});
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
        while (this.dateRanges.length) {
            this.dateRanges.removeAt(0);
        }
        
        const foundYear = this.years.find(y => y.year === year);
        if (foundYear) {
            foundYear.dates.forEach(date => {
                const dateGroup = this.createDateRange();
                dateGroup.patchValue(date);
                this.dateRanges.push(dateGroup);
            });
        }
        
        if (this.dateRanges.length === 0) {
            this.addDateRange();
        }
    }

    validateDates(): boolean {
        for (let i = 0; i < this.dateRanges.length; i++) {
            const range = this.dateRanges.at(i).value;
            if (range.start > range.end) {
                alert('End date cannot be before start date');
                return false;
            }
            for (let j = i + 1; j < this.dateRanges.length; j++) {
                const otherRange = this.dateRanges.at(j).value;
                if (
                    (range.start >= otherRange.start && range.start <= otherRange.end) ||
                    (range.end >= otherRange.start && range.end <= otherRange.end) ||
                    (otherRange.start >= range.start && otherRange.start <= range.end)
                ) {
                    alert('Date ranges cannot overlap');
                    return false;
                }
            }
        }
        return true;
    }

    editYear() {
        // @note: On a real application, this would be a service call to the backend, for now we will just log the data and update it in the list in frontend
        if (this.editForm.valid && this.validateDates()) {
            const foundYear = this.years.find(y => y.year === this.currentYear);
            if (foundYear) {
                foundYear.dates = this.dateRanges.value;
                foundYear.dates.sort((a, b) => a.start.localeCompare(b.start));
            }
            this.showEditForm = false;
            this.currentYear = 'none';
        }
    }
}
