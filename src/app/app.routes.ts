import { Routes } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { RequestVacationsComponent } from './components/sections/request-vacations/request-vacations.component';
import { ApproveVacationsComponent } from './components/sections/approve-vacations/approve-vacations.component';
import { ManageVacationsComponent } from './components/sections/manage-vacations/manage-vacations.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'request-vacations', component: RequestVacationsComponent },
    { path: 'approve-vacations', component: ApproveVacationsComponent },
    { path: 'manage-vacations', component:  ManageVacationsComponent },
];
