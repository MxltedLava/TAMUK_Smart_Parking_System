import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ParkingSelectionComponent } from './parking-selection/parking-selection.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'parking-selection', component: ParkingSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }