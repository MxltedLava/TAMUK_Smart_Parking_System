import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  validateVehicle(lot: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('lot', lot);

    return this.http.post(`${this.apiUrl}/validate_parking`, formData);
  }
}