import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.css']
})
export class SecurityDashboardComponent implements OnInit {

  alerts: any[] = [
    // Sample data for unauthorized alerts (replace this with real data or fetch from an API)
    { plate_read: 'XYZ123', lot: 'Lot 1', timestamp: new Date('2025-04-22T10:30:00'), image_path: 'assets/media/plate1.jpg' },
    { plate_read: 'ABC456', lot: 'Lot 2', timestamp: new Date('2025-04-21T15:20:00'), image_path: 'assets/media/plate2.jpg' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // In a real scenario, load data from an API or service
    // For now, it's using hardcoded data for the alerts
  }

  goBack(): void {
    this.router.navigate(['/employee-menu']); // Navigate back to employee menu or adjust route as necessary
  }
}
