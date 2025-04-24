import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

  goToStudentMenu(): void {
    this.router.navigate(['/student-menu']);
  }

  goToEmployeePage(): void {
    this.router.navigate(['/employee']);
  }

  register(): void {
    this.router.navigate(['/accountregistration']);
  }
}
