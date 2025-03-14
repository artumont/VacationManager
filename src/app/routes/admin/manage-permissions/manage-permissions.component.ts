import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
    selector: 'app-manage-permissions',
    imports: [NgClass, NgFor, ReactiveFormsModule, LucideAngularModule],
    templateUrl: './manage-permissions.component.html',
})
export class ManagePermissionsComponent {
    readonly PlusIcon = Plus;

    addEmployeeForm: FormGroup;

    employees = [
        {name: 'John Doe', canSee: true, canApprove: false},
        {name: 'Jane Doe', canSee: false, canApprove: true},
        {name: 'John Smith', canSee: true, canApprove: true},
    ];

    constructor(private fb: FormBuilder) {
        this.addEmployeeForm = this.fb.group({
            name: ['', Validators.required],
            canSee: [false, Validators.required],
            canApprove: [false, Validators.required]
        });
    }

    toggleSee(employee: string) {
        const foundEmployee = this.employees.find(emp => emp.name === employee);
        if (foundEmployee) {
            foundEmployee.canSee = !foundEmployee.canSee;
        }
        else {
            console.error('Employee not found');
        }
    }

    toggleApprove(employee: string) {
        const foundEmployee = this.employees.find(emp => emp.name === employee);
        if (foundEmployee) {
            foundEmployee.canApprove = !foundEmployee.canApprove;
        }
        else {
            console.error('Employee not found');
        }
    }

    addEmployee() {
        if (this.addEmployeeForm.valid) {
            this.employees.push({
                name: this.addEmployeeForm.value.name,
                canSee: this.addEmployeeForm.value.canSee,
                canApprove: this.addEmployeeForm.value.canApprove
            });
            this.addEmployeeForm.reset();
        }
    }
}
