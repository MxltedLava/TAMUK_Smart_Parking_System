import { Component, OnInit } from '@angular/core';
import { ParkingService } from '/Users/destinydelagarza/SmarkParkingSystem/TAMUK_Smart_Parking_System/smart-parking-frontend/src/app/services/parking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-selection',
  templateUrl: './parking-selection.component.html',
  styleUrls: ['./parking-selection.component.css']
})
export class ParkingSelectionComponent implements OnInit {
  parkingLots = [
    { id: 1, name: "Lot A", availableSpots: 12, image: "assets/lot-a.jpg" },
    { id: 2, name: "Lot B", availableSpots: 5, image: "assets/lot-b.jpg" },
    { id: 3, name: "Lot C", availableSpots: 8, image: "assets/lot-c.jpg" },
    { id: 4, name: "Lot D", availableSpots: 3, image: "assets/lot-d.jpg" },
    { id: 5, name: "Lot E", availableSpots: 10, image: "assets/lot-e.jpg" }
  ];

  constructor(private router: Router) {}

  selectLot(lotId: number) {
    this.router.navigate(['/license-check', lotId]);
  }
}