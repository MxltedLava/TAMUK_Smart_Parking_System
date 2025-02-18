import { Component } from '@angular/core';
import { AuthService } from 'smart-parking-frontend/src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log("Login successful:", response);
        this.router.navigate(['/parking-selection']);
      },
      (error) => {
        console.error("Login failed:", error);
        this.errorMessage = "Invalid username or password.";
      }
    );
  }
}