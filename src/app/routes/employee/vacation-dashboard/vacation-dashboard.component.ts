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
        {id: 1, reason: 'Family Wedding', startDate: '2024-03-15', endDate: '2024-03-20', requestDate: '2024-02-01', approved: 'True'},
        {id: 2, reason: 'Medical Procedure', startDate: '2024-04-10', endDate: '2024-04-15', requestDate: '2024-03-01', approved: 'Pending'},
        {id: 3, reason: 'Summer Vacation', startDate: '2024-07-01', endDate: '2024-07-14', requestDate: '2024-05-15', approved: 'True'},
        {id: 4, reason: 'Personal Development - Conference', startDate: '2024-09-20', endDate: '2024-09-24', requestDate: '2024-08-01', approved: 'False'},
        {id: 5, reason: 'Winter Holiday', startDate: '2024-12-23', endDate: '2024-12-31', requestDate: '2024-11-01', approved: 'Pending'}
    ]

    constructor() {}
}
