import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-history',
  templateUrl: './parking-history.component.html',
  styleUrls: ['./parking-history.component.css']
})
export class ParkingHistoryComponent implements OnInit {
  results: any[] = [];  // Store parking history results
  plate: string = '';   // Store the plate number being queried

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize your results and plate data here if needed.
  }

  // Go Back Method for Navigation
  goBack(): void {
    this.router.navigate(['/employee-menu']);  // Adjust this based on your actual route
  }
}
