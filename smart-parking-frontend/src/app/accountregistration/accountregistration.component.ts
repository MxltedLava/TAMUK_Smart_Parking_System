import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-registration',
  templateUrl: './accountregistration.component.html',
  styleUrls: ['./accountregistration.component.css']
})
export class AccountRegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onRegister(event: Event): void {
    event.preventDefault();

    // Password match check
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }

    // Email pattern check (extra validation if needed)
    const tamukEmailRegex = /^[a-zA-Z0-9._%+-]+@students\.tamuk\.edu$/;
    if (!tamukEmailRegex.test(this.email)) {
      this.errorMessage = "Please enter a valid TAMUK student email.";
      return;
    }

    // Simulate registration success (replace with real backend call)
    // If all validations pass:
    this.errorMessage = '';
    console.log('Registration successful!');
    this.router.navigate(['/login']); // ✅ Navigate to login page
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
