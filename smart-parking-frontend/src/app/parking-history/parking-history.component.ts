import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parking-history',
  templateUrl: './parking-history.component.html',
  styleUrls: ['./parking-history.component.css']
})
export class ParkingHistoryComponent implements OnInit {
  plate: string = '';
  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const savedPlate = localStorage.getItem('owner_plate');
    if (savedPlate) {
      this.plate = savedPlate;
      this.fetchHistory();
    }
  }

  fetchHistory(): void {
    this.http.get<any[]>(`/api/parking-history?plate=${this.plate}`).subscribe(data => {
      this.results = data;
    }, err => {
      console.error("Failed to load parking history", err);
    });
  }
}