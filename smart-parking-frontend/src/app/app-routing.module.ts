import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from '../../src/app/accountregistration/accountregistration.component';
import { EmployeePageComponent } from '../../src/app/employeelogin/employeelogin.component';
import { ClearanceCheckComponent } from './clearance-check/clearance-check.component';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { ParkingHistoryComponent } from './parking-history/parking-history.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employee', component: EmployeePageComponent },
  { path: 'parking-history', component: ParkingHistoryComponent },
  { path: 'clearance-check', component: ClearanceCheckComponent },
  { path: 'dashboard', component: SecurityDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}