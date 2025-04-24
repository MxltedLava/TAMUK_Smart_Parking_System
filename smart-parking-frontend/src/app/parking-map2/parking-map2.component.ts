import { Component } from '@angular/core';

@Component({
  selector: 'app-parking-map2',  // Update selector to match the correct usage in HTML
  templateUrl: './parking-map2.component.html',  // Use correct template for Area 2
  styleUrls: ['./parking-map2.component.css']  // Make sure CSS is relevant to the page
})
export class ParkingMap2Component {
  // Any logic or data needed for the map can go here

  // Example if you want to pass some information to the map
  areaDescription: string = 'Area 2 - University Blvd., Ave. C, Ave. B, Armstrong St., Lantana St., & Engineering Ave.';
}
