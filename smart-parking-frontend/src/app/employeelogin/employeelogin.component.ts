import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(event: Event): void {
    event.preventDefault();

    // Example static check — replace with real backend authentication
    if (this.username === 'employee' && this.password === 'secure') {
      this.router.navigate(['/employee-menu']);
    } else {
      this.errorMessage = 'Incorrect Username or Password. Please try again.';
    }
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }

  goToEmployeeMenu(): void {
    this.router.navigate(['/employee-menu']);
  }
}
