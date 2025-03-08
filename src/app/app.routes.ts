import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { RequestVacationsComponent } from './routes/employee/request-vacations/request-vacations.component';
import { OngoingVacationsComponent } from './routes/employee/ongoing-vacations/ongoing-vacations.component';
import { PastVacationsComponent } from './routes/employee/past-vacations/past-vacations.component';
import { ApproveVacationsComponent } from './routes/manager/approve-vacations/approve-vacations.component';
import { ManageVacationsComponent } from './routes/manager/manage-vacations/manage-vacations.component';
import { ManagePermissionsComponent } from './routes/admin/manage-permissions/manage-permissions.component';
import { ConfigureHolidaysComponent } from './routes/admin/configure-holidays/configure-holidays.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    
    // @important: Employee
    { path: 'employee/request-vacations', component: RequestVacationsComponent },
    { path: 'employee/ongoing-vacations', component: OngoingVacationsComponent },
    { path: 'employee/past-vacations', component: PastVacationsComponent },
    
    // @important: Manager
    { path: 'manager/approve-vacations', component: ApproveVacationsComponent },
    { path: 'manager/manage-vacations', component: ManageVacationsComponent },
    
    // @important: Admin 
    { path: 'admin/manage-permissions', component: ManagePermissionsComponent },
    { path: 'admin/configure-holidays', component: ConfigureHolidaysComponent }
];
