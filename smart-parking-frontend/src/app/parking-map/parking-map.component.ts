import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-map',
  templateUrl: './parking-map.component.html',
  styleUrls: ['./parking-map.component.css']
})
export class ParkingMapComponent implements OnInit {
  lot: number = 0;
  vehicles: any[] = [];
  isLoading = true;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.lot = Number(this.route.snapshot.paramMap.get('lot'));
    try {
      const response = await axios.get(`http://localhost:5000/api/parking-lot/${this.lot}`);
      this.vehicles = response.data;
      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  }
}