import { Routes } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { RequestVacationsComponent } from './components/sections/request-vacations/request-vacations.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'request-vacations', component: RequestVacationsComponent },
    { path: 'approve-vacations', component: HomeComponent }, // Replace with actual component
    { path: 'manage-vacations', component: HomeComponent }, // Replace with actual component
];
