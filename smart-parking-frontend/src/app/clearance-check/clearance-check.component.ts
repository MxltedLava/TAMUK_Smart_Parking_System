import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clearance-check',
  templateUrl: './clearance-check.component.html',
  styleUrls: ['./clearance-check.component.css']
})
export class ClearanceCheckComponent {
  plate: string = '';
  status: string = '';
  imagePath: string = '';

  constructor(private http: HttpClient) {}

  checkPlate(imagePath: string) {
    this.http.get<any>(`/api/check-clearance?image=${imagePath}`).subscribe(res => {
      this.plate = res.plate;
      this.status = res.status;
      if (res.status === 'unauthorized') {
        alert(`🚨 Unauthorized Vehicle! Plate: ${res.plate}`);
      } else {
        alert(`✅ Access Granted for ${res.plate}`);
      }
    }, error => {
      alert("Something went wrong! 🛑");
      console.error(error);
    });
  }
}