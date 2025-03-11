import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';   // ✅ Ensure this path is correct
import { ParkingMapComponent } from './parking-map/parking-map.component';
import { ParkingSelectionComponent } from './parking-selection/parking-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'parking-map', component: ParkingMapComponent },
  { path: 'parking-selection', component: ParkingSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }