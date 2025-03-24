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

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'your-username' && this.password === 'your-password') {
      // Redirect to Parking Map on successful login
      this.router.navigate(['/parking-map']);
    } else {
      alert('Invalid username or password!');
    }
  }
}