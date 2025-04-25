import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeMenuComponent } from './employee-menu/employee-menu';  // Added missing ".component"
import { ClearanceCheckComponent } from './clearance-check/clearance-check.component';
import { ParkingHistoryComponent } from './parking-history/parking-history.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';
import { LiveFootageComponent } from './livefootage/livefootage'; // Corrected missing ".component"
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { ParkingMapComponent } from './parking-map/parking-map.component'; 
import { ParkingMap2Component } from './parking-map2/parking-map2.component'; 
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration';  // Added ".component"
import { StudentMenuComponent } from './student-menu/student-menu';  // Added ".component"
import { AccountRegistrationComponent } from './accountregistration/accountregistration.component';  // Added ".component"
import { ParkingMap2dComponent } from './parkingmap2d/parking-map2d.component'; // Added ".component"
import { ParkingMap2dfComponent } from './parkingmap2df/parking-map2df.component'; // Added ".component"
import { StudentProfileComponent } from './student-profile/student-profile'; // Added ".component"
import { UpdatePhoneNumberComponent } from './update-phonenumber/update-phonenumber'; // Added ".component"
import { UpdateVehicleRegistrationComponent } from './update-vehicleregistration/update-vehicleregistration'; // Added ".component"

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-menu', component: EmployeeMenuComponent },
  { path: 'clearance-check', component: ClearanceCheckComponent },
  { path: 'parking-history', component: ParkingHistoryComponent },
  { path: 'dashboard', component: SecurityDashboardComponent },
  { path: 'livefootage', component: LiveFootageComponent },
  { path: 'register-vehicle', component: RegisterVehicleComponent },
  { path: 'parking-map', component: ParkingMapComponent },
  { path: 'vehicle-registration', component: VehicleRegistrationComponent },
  { path: 'student-menu', component: StudentMenuComponent },
  { path: 'account-registration', component: AccountRegistrationComponent },
  { path: 'parking-map2', component: ParkingMap2Component },
  { path: 'parking-map2d', component: ParkingMap2dComponent },
  { path: 'parking-map2df', component: ParkingMap2dfComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: 'update-phonenumber', component: UpdatePhoneNumberComponent },
  { path: 'update-vehicleregistration', component: UpdateVehicleRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}