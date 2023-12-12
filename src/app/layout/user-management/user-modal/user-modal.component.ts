import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  constructor(private http: HttpClient) {}
  username: string = '';
  password: string = '';
  passwordInputType = 'password';
  position: string = 'Officer';
  positions: string[] = ['Officer', 'Deputy Chief', 'Lieutenant', 'Chief'];
  users: { username: string; password: string, passwordHidden: boolean, position:string }[] = [];

  addUser() {
    if (this.username && this.password) {
      const newUser = {
        username: this.username,
        password: this.password,
        passwordHidden: true,
        position: this.position,
      };
  
      // Assuming your API endpoint is http://localhost:3000/add/user
      const apiUrl = 'http://localhost:3000/user-management/add-admin';
  
      // Make an HTTP POST request to send user data to the server
      this.http.post(apiUrl, newUser).subscribe({
        next: (response) => {
          console.log('User added successfully', response);
          // Optionally, you can update the local data if needed
          this.users.push(newUser);
        },
        error: (error) => {
          console.error('Error adding user:', error);
        },
      });
  
      // Clear input fields
      this.username = '';
      this.password = '';
      this.passwordInputType = 'password';
      this.position = '';
    }
  }
}

