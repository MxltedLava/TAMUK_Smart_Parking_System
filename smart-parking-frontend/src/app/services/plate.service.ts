import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlateService {
  constructor(private http: HttpClient) {}

  checkClearance(imagePath: string) {
    return this.http.get<any>(`/api/check-clearance?image=${imagePath}`);
  }
}