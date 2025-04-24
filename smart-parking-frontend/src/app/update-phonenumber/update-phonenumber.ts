import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-phone-number',
  templateUrl: './update-phone-number.component.html',
  styleUrls: ['./update-phone-number.component.css']
})
export class UpdatePhoneNumberComponent {
  phoneNumber: string = ''; // The phone number input value

  constructor(private router: Router) {}

  // Method to handle phone number update logic
  onUpdatePhone(): void {
    // Logic to update the phone number (e.g., make an API call to update the backend)
    console.log('New Phone Number:', this.phoneNumber);

    // After updating the phone number, you could redirect or show a success message
    // For now, it's simply logged to the console
  }

  // Method to navigate back to the profile page
  goBackToProfile(): void {
    this.router.navigate(['/student-profile']);
  }
}

