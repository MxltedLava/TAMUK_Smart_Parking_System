import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clearance-check',
  templateUrl: './clearance-check.component.html',
  styleUrls: ['./clearance-check.component.css']
})
export class ClearanceCheckComponent {
  imagePath: string = '';
  plate: string = '';
  status: string = '';

  constructor(private router: Router) {}

  // Function to handle the plate check
  checkPlate(imagePath: string): void {
    // Logic to check the plate status based on the image path
    // You can simulate an API call here or perform the image analysis
    if (imagePath) {
      // Simulated data for demonstration
      this.plate = 'ABC123'; // Example plate number from the image
      this.status = 'Cleared'; // Example status from the parking system
    } else {
      this.plate = '';
      this.status = 'Invalid image path or no image uploaded';
    }
  }

  // Go back to the employee menu
  goBack(): void {
    this.router.navigate(['/employee-menu']);  // Adjust the route as necessary
  }
}
