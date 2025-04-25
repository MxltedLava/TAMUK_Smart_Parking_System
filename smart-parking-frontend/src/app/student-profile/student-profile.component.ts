import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.html',
  styleUrls: ['./student-profile.css']
})
export class StudentProfileComponent implements OnInit {

  username: string = 'John Doe'; // Example value, replace with actual data
  email: string = 'john.doe@example.com'; // Example value, replace with actual data
  licensePlate: string = 'XYZ1234'; // Example value, replace with actual data
  phone: string = '(123) 456-7890'; // Example value, replace with actual data

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Example: Fetch user data from an API or service on component initialization
    // For now, the values are hardcoded for demonstration.
  }

  // Method to navigate to the vehicle registration update page
  goToUpdateVehicleRegistration(): void {
    this.router.navigate(['/update-vehicleregistration']);
  }

  // Method to navigate to the phone number update page
  goToUpdatePhoneNumber(): void {
    this.router.navigate(['/update-phonenumber']);
  }

  // Method to navigate back to the student menu
  goToStudentMenu(): void {
    this.router.navigate(['/student-menu']);
  }
}
