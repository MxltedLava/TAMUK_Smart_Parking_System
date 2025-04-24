import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {

  vehicles: any[] = [
    // Mock data: Replace with real data from an API or service
    { owner: 'John Doe', make: 'Toyota', model: 'Camry', plate: 'XYZ123', expiry: new Date('2025-06-15'), status: 'Active' },
    { owner: 'Jane Smith', make: 'Honda', model: 'Civic', plate: 'ABC456', expiry: new Date('2024-11-10'), status: 'Expired' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // This is where you would load your vehicle data, potentially from a service.
    // For now, it uses mock data.
  }

  goBack(): void {
    this.router.navigate(['/employee-menu']); // Navigate back to employee menu (or modify as needed)
  }
}
``

