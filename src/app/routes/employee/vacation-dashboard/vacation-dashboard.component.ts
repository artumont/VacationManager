import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-vacation-dashboard',
    imports: [CommonModule],
    templateUrl: './vacation-dashboard.component.html',
})
export class VacationDashboardComponent {

    isOnVacation = true;
    daysLeft = 2;

    vacations = [
        {id: 1, reason: 'Family Wedding', startDate: '2024-03-15', endDate: '2024-03-20', requestDate: '2024-02-01', approved: 'Yes'},
        {id: 2, reason: 'Personal Development - Conference', startDate: '2024-09-20', endDate: '2024-09-24', requestDate: '2024-08-01', approved: 'No'},
        {id: 3, reason: 'Medical Procedure', startDate: '2024-04-10', endDate: '2024-04-15', requestDate: '2024-03-01', approved: 'Pending'},
    ]

    constructor() {}
}
