import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Check, LucideAngularModule, X as XIm} from 'lucide-angular';

@Component({
    selector: 'app-approve-vacations',
    imports: [NgFor, NgClass, LucideAngularModule],
    templateUrl: './approve-vacations.component.html',
})
export class ApproveVacationsComponent {
    readonly CheckIcon = Check;
    readonly XIcon = XIm;

    vacations = [
        {id: 1, name: 'John Doe', startDate: '2021-01-01', endDate: '2021-01-05', requestDate: '2021-01-01', reason: 'Vacation', status: 'Approved'},
        {id: 2, name: 'Jane Doe', startDate: '2021-01-06', endDate: '2021-01-10', requestDate: '2021-01-01', reason: 'Vacation', status: 'Rejected'},
        {id: 3, name: 'John Smith', startDate: '2021-01-11', endDate: '2021-01-15', requestDate: '2021-01-01', reason: 'Vacation', status: 'Pending'},
    ]

    approveVacation(id: number) {
        const foundVacation = this.vacations.find(vac => vac.id == id);
        if (foundVacation) {
            foundVacation.status = 'Approved';
        }
        else {
            console.error('Vacation not found');
        }
    }

    rejectVacation(id: number) {
        const foundVacation = this.vacations.find(vac => vac.id == id);
        if (foundVacation) {
            foundVacation.status = 'Rejected';
        }
        else {
            console.error('Vacation not found');
        }
    }
}
