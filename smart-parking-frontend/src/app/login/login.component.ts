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

  register(): void {
    this.router.navigate(['/register']); // Go to a real registration page
  }
}