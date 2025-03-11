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
  errorMessage: string = '';  // ✅ Ensure this is here

  constructor(private router: Router) {}

  onLogin(event: Event) {   // ✅ Fix: Ensure this function exists
    event.preventDefault();  // ✅ Prevents page refresh
    if (this.username === 'admin' && this.password === 'password') {  // Replace with real API call later
      this.router.navigate(['/parking-selection']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  register() {  // ✅ Dummy register function
    alert('Registration not yet implemented!');
  }
}