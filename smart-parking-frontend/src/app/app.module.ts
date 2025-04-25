import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import all the components used in routes
import { LoginComponent } from './login/login.component';
import { EmployeeMenuComponent } from './employee-menu/employee-menu';
import { ClearanceCheckComponent } from './clearance-check/clearance-check.component';
import { ParkingHistoryComponent } from './parking-history/parking-history.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';
import { LiveFootageComponent } from './livefootage/livefootage';
import { RegisterVehicleComponent } from './register-vehicle/register-vehicle.component';
import { ParkingMapComponent } from './parking-map/parking-map.component';
import { ParkingMap2Component } from './parking-map2/parking-map2.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration';
import { StudentMenuComponent } from './student-menu/student-menu';
import { AccountRegistrationComponent } from './accountregistration/accountregistration.component';
import { ParkingMap2dComponent } from './parkingmap2d/parking-map2d.component';
import { ParkingMap2dfComponent } from './parkingmap2df/parking-map2df.component';
import { StudentProfileComponent } from './student-profile/student-profile';
import { UpdatePhoneNumberComponent } from './update-phonenumber/update-phonenumber';
import { UpdateVehicleRegistrationComponent } from './update-vehicleregistration/update-vehicleregistration';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeMenuComponent,
    ClearanceCheckComponent,
    ParkingHistoryComponent,
    SecurityDashboardComponent,
    LiveFootageComponent,
    RegisterVehicleComponent,
    ParkingMapComponent,
    ParkingMap2Component,
    VehicleRegistrationComponent,
    StudentMenuComponent,
    AccountRegistrationComponent,
    ParkingMap2dComponent,
    ParkingMap2dfComponent,
    StudentProfileComponent,
    UpdatePhoneNumberComponent,
    UpdateVehicleRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // <--- This is essential!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

