import { Component, OnInit } from '@angular/core';
import { admin_card_data, admin_topnav_data, admin_sidenav_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  cardData = admin_card_data;
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;

  editingIndex: number | null = null;
  editedUser: { crime: string; location: string; date: string; resolution: string } = { crime: '', location: '', date: '', resolution: '' };
  
  

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

  editCrime(index: number) {
    this.editingIndex = index;
  }

  saveEdit(index: number) {
    // Save your changes here
    this.editingIndex = null; // Reset editing index after saving
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);

    localStorage.setItem('userManagementData', JSON.stringify(this.users));
  }
  togglePasswordVisibility(index: number) {
    this.users[index].passwordHidden = !this.users[index].passwordHidden;
    this.passwordInputType = this.users.some(user => !user.passwordHidden) ? 'text' : 'password';
  }
  ngOnInit() {
    const storedData = localStorage.getItem('userManagementData');
    if (storedData) {
      this.users = JSON.parse(storedData);
    }
  }
}
