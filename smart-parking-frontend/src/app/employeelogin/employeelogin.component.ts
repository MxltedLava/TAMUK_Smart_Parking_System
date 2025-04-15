import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(event: Event): void {
    event.preventDefault();

    if (this.username === 'admin' && this.password === 'orange') {
      this.router.navigate(['/parking-selection']);
    } else {
      this.errorMessage = 'Incorrect Password or Username, please try again!';
    }
  }

  // This method handles redirection for employee login
  goToEmployeePage(): void {
    this.router.navigate(['/employee']);  // Adjust route as necessary for employee page
  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
