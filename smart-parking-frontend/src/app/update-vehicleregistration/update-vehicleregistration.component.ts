import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle-registration',
  templateUrl: './update-vehicleregistration.html',
  styleUrls: ['./update-vehicleregistration.css']
})
export class UpdateVehicleRegistrationComponent {
  licensePlate: string = ''; // Property to bind to the input field

  constructor(private router: Router) {}

  // Method to handle license plate update
  onUpdate(): void {
    // Logic to update the license plate (could be an API call to update it on the backend)
    console.log('Updated License Plate:', this.licensePlate);

    // After successful update, you can redirect or show a success message
  }

  // Method to navigate back to the profile page
  goBackToProfile(): void {
    this.router.navigate(['/student-profile']); // Uses Angular's Router for navigation
  }
}
