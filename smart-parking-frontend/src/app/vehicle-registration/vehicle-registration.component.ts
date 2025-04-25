import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.html',
  styleUrls: ['./vehicle-registration.css']
})
export class VehicleRegistrationComponent {
  vehicle = {
    licensePlate: '',
    make: '',
    model: '',
    year: null,
    color: ''
  };

  constructor(private router: Router) {}

  onRegister(): void {
    // Logic to register the vehicle (e.g., sending the data to an API)
    console.log('Vehicle Registered:', this.vehicle);

    // After successful registration, navigate or show a success message
    this.router.navigate(['/student-menu']); // Navigate back to the student menu
  }

  goBackToMenu(): void {
    this.router.navigate(['/student-menu']); // Navigate back to the student menu
  }
}
