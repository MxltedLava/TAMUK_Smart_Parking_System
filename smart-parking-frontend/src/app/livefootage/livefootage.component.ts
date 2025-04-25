import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livefootage',
  templateUrl: './livefootage.component.html',
  styleUrls: ['./livefootage.component.css']
})
export class LiveFootageComponent {

  constructor(private router: Router) {}

  // Go back to the Employee Menu page
  goBack(): void {
    this.router.navigate(['/employee-menu']);
  }
}
