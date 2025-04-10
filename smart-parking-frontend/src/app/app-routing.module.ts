// frontend/src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { OwnerLoginComponent } from './login/login.component'; // ✅ updated
import { ParkingHistoryComponent } from './parking-history/parking-history.component';
import { ClearanceCheckComponent } from './clearance-check/clearance-check.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterVehicleComponent },
  { path: 'login', component: OwnerLoginComponent },
  { path: 'history', component: ParkingHistoryComponent },
  { path: 'check', component: ClearanceCheckComponent },
  { path: 'alerts', component: SecurityDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}