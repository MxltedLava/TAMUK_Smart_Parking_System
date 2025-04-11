import { Component } from '@angular/core';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html'
})
export class RegisterVehicleComponent {
  licensePlate: string = '';

  registerVehicle() {
    console.log("Registering vehicle:", this.licensePlate);
  }
}