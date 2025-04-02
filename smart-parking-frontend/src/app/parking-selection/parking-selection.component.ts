import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-selection',
  templateUrl: './parking-selection.component.html',
  styleUrls: ['./parking-selection.component.css']
})
export class ParkingSelectionComponent {
  parkingLots = ['A', 'B', 'C', 'D', 'E', 'F'];

  constructor(private router: Router) { }

  selectLot(lot: string) {
    this.router.navigate(['/parking-map', lot]);
  }
}