import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.html',
  styleUrls: ['./employee-menu.css']
})
export class EmployeeMenuComponent {

  constructor(private router: Router) {}

  // Navigate to the Security Dashboard
  goToSecurityDashboard(): void {
    this.router.navigate(['/security-dashboard']);
  }

  // Navigate to the Vehicle Registration page
  goToVehicleRegistration(): void {
    this.router.navigate(['/register-vehicle']);
  }

  // Navigate to the Clearance Check page
  goToClearanceCheck(): void {
    this.router.navigate(['/clearance-check']);
  }

  // Navigate to the Parking History page
  goToParkingHistory(): void {
    this.router.navigate(['/parking-history']);
  }

  // Navigate to the Live License Plate Footage Feed page
  goToLiveFootage(): void {
    this.router.navigate(['/livefootage']);
  }

  // Navigate to the Login page (Log out)
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
