import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, Plus, Trash } from 'lucide-angular';

@Component({
    selector: 'app-manage-permissions',
    imports: [NgClass, NgFor, ReactiveFormsModule, LucideAngularModule],
    templateUrl: './manage-permissions.component.html',
})
export class ManagePermissionsComponent {
    readonly PlusIcon = Plus;
    readonly TrashIcon = Trash;

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
        // @note: This is a simple example, in a real-world application, you should send the data to a server or it should be already stored in a database.
        if (this.addEmployeeForm.valid) {
            if (!this.employees.find(emp => emp.name == this.addEmployeeForm.value.name)){
                this.employees.push({
                    name: this.addEmployeeForm.value.name,
                    canSee: this.addEmployeeForm.value.canSee,
                    canApprove: this.addEmployeeForm.value.canApprove
                });
                alert('Employee added');
            }
            else {
                alert('Employee already exists');
            }
        }
    }

    deleteEmployee(employee: string) {
        // @note: This is a simple example, in a real-world application, you should send the data to a server or it should be already stored in a database.
        const foundEmployee = this.employees.find(emp => emp.name == employee)
        if (foundEmployee) {
            this.employees = this.employees.filter(emp => emp.name !== employee);
        }
        else {
            console.error('Employee not found');
        }
    }
}
