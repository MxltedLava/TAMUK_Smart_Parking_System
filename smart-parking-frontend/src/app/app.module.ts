import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountRegistrationComponent } from './accountregistration/accountregistration.component';
import { LoginComponent } from './login/login.component';
import { ParkingHistoryComponent } from './parking-history/parking-history.component';
import { ClearanceCheckComponent } from './clearance-check/clearance-check.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountRegistrationComponent,
    AccountRegistrationComponent,
    LoginComponent,
    ParkingHistoryComponent,
    ClearanceCheckComponent,
    SecurityDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }