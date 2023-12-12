import { Component, OnInit } from '@angular/core';
import {  MatDialog,} from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/components/data.service';
import { admin_card_data, admin_topnav_data, admin_sidenav_data } from 'src/shared_data/dashboard_data';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent{
  adminData: any[];
  constructor(private dialogRef: MatDialog, private httpClient: HttpClient, private dataService: DataService) {}
   
  ngOnInit(): void {
    this.dataService.getAllAdmins().subscribe((data) => {
      this.adminData = data.map(admin => ({ ...admin, passwordHidden: true }));
    });
  }

  openDialog() {
    this.dialogRef.open(UserModalComponent)
  }
  
  

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
    this.adminData[index].passwordHidden = !this.adminData[index].passwordHidden;
  }
 }
