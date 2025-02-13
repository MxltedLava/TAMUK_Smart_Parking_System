import { Component } from '@angular/core';
import { ParkingService } from '../services/parking.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-selection',
  templateUrl: './parking-selection.component.html',
  styleUrls: ['./parking-selection.component.css']
})
export class ParkingSelectionComponent {
  lots = ['Lot A', 'Lot B', 'Lot C', 'Lot D'];
  selectedLot: string | null = null;
  availableSpots: { spot: number, status: number }[] = [];
  selectedFile: File | null = null;

  constructor(private parkingService: ParkingService, private http: HttpClient, private router: Router) {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['/login']);
    }
  }

  selectLot(lot: string) {
    this.selectedLot = lot;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  validateParking() {
    if (this.selectedFile && this.selectedLot) {
      this.parkingService.validateVehicle(this.selectedLot, this.selectedFile).subscribe(response => {
        alert(response.message);
      }, error => {
        alert("Unauthorized vehicle: " + error.error.plate);
      });
    } else {
      alert("Please select a lot and upload a car image.");
    }
  }
}