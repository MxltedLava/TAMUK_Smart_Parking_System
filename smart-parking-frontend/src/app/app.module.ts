import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // ✅ Ensure this is imported
import { LoginComponent } from './login/login.component';  // ✅ Ensure this path is correct
import { ParkingMapComponent } from './parking-map/parking-map.component';
import { ParkingSelectionComponent } from './parking-selection/parking-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,          // ✅ Ensure this is here
    ParkingMapComponent,
    ParkingSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule               // ✅ Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }