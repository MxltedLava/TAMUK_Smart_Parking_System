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

  constructor(private router: Router) {}

  onRegister(): void {
    // Add logic for form validation and registration
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Simulate successful registration or send data to your backend
    console.log('Registered:', { username: this.username, email: this.email });

    // Navigate to login after successful registration
    this.router.navigate(['/login']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
