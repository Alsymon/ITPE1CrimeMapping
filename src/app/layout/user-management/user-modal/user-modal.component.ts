import { Component } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  username: string = '';
  password: string = '';
  passwordInputType = 'password';
  position: string = 'Officer';
  positions: string[] = ['Officer', 'Deputy Chief', 'Lieutenant', 'Chief'];
  users: { username: string; password: string, passwordHidden: boolean, position:string }[] = [];

  addUser() {
    if (this.username && this.password) {
      this.users.push({ username: this.username, password: this.password,passwordHidden: true, position: this.position});
      this.username = '';
      this.password = '';
      this.passwordInputType = 'password';
      this.position = '';

      localStorage.setItem('userManagementData', JSON.stringify(this.users));
    }
  }
    ngOnInit() {
    const storedData = localStorage.getItem('userManagementData');
    if (storedData) {
      this.users = JSON.parse(storedData);
    }
  }
}
