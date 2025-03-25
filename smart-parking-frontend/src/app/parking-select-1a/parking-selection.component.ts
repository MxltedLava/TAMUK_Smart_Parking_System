import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-selection',
  templateUrl: './parking-selection.component.html',
  styleUrls: ['./parking-selection.component.css']
})
export class ParkingSelectionComponent {
  parkingLots = [1, 2, 3, 4, 5, 6];

  constructor(private router: Router) { }

  selectLot(lot: number) {
    this.router.navigate(['/parking-map', lot]);
  }
}