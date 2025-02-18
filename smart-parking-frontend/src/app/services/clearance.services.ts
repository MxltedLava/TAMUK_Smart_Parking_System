import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClearanceService {
  constructor(private http: HttpClient) {}

  checkClearance(licensePlate: string) {
    return this.http.get(`/api/check-clearance/${licensePlate}`);
  }
}