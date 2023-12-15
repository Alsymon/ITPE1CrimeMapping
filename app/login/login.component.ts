import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    const credentials = { username: this.username, password: this.password };
    
    this.http.post('http://localhost:3000/login-admin', credentials)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          // Redirect or perform other actions on successful login
          window.location.href = 'http://localhost:4200/dashboard';
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          // Handle login failure, e.g., show an error message to the user
        }
      });
  }
}
