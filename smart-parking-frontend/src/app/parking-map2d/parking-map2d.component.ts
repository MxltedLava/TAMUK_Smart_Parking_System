import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Angular's Router to navigate programmatically

@Component({
  selector: 'app-parking-map2d',
  templateUrl: './parking-map2d.component.html',
  styleUrls: ['./parking-map2d.component.css']
})
export class ParkingMap2dComponent {

  constructor(private router: Router) {}

  // Function for navigating to different parking lots
  goToParkingLot(lot: string) {
    switch(lot) {
      case 'A':
        // Logic for Lot A (for example, navigating to a detailed map)
        console.log("Navigating to Lot A");
        break;
      case 'B':
        // Logic for Lot B
        console.log("Navigating to Lot B");
        break;
      case 'C':
        // Logic for Lot C
        console.log("Navigating to Lot C");
        break;
      case 'D':
        // Logic for Lot D (already has a route, so could navigate there)
        console.log("Navigating to Lot D");
        break;
      default:
        console.log("Unknown Lot");
    }
  }

  // Use Angular's routerLink for navigation instead of window.location.href
  navigateToMap2DF() {
    this.router.navigate(['/parkingmap2df']); // Navigates to parking map 2d
  }

  goBack() {
    this.router.navigate(['/parking-map2']); // Go back to the previous page
  }
}
