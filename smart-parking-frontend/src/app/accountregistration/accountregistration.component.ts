import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-registration',
  templateUrl: './accountregistration.component.html',
  styleUrls: ['./accountregistration.component.css']
})
export class AccountRegistrationComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private http: HttpClient) {}

  // Handle the registration logic when the form is submitted
  onRegister(event: Event) {
    event.preventDefault();

    // Check if password and confirmPassword match
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match! Please try again.");
      return;
    }

    // Prepare the data to send to the backend
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    // Send POST request to the backend to register the user
    this.http.post('http://127.0.0.1:3000/register', user).subscribe(
      (response) => {
        alert('User Registered Successfully!');
        console.log(response);
      },
      (error) => {
        alert('Registration failed! Please try again.');
        console.error(error);
      }
    );
  }

  // Redirect to login page if the user already has an account
  login() {
    window.location.href = 'http://127.0.0.1:5502/smart-parking-frontend/src/app/login/login.component.html';
  }
}
