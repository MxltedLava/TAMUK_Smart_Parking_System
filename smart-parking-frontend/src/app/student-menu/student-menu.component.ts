import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent implements OnInit {

  // Example statuses, can be set dynamically based on user data
  isVehicleRegistered: boolean = false;  // Set to true if vehicle is registered
  isPhoneRegistered: boolean = false;    // Set to true if phone number is registered

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Example: Fetch vehicle and phone registration statuses from an API or service
    // For now, it is hardcoded to false for testing purposes
  }

  goToMap(): void {
    this.router.navigate(['/parking-map']); // Navigate to parking map page
  }

  goToVehicleRegistration(): void {
    this.router.navigate(['/register-vehicle']); // Navigate to vehicle registration page
  }

  goToProfile(): void {
    this.router.navigate(['/profile']); // Navigate to profile page
  }

  logout(): void {
    // Perform logout operations (clear session, tokens, etc.)
    // Redirect to login page after logout
    this.router.navigate(['/login']);
  }
}

