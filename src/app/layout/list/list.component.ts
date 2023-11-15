import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { admin_card_data, admin_topnav_data, admin_sidenav_data, table_data } from 'src/shared_data/dashboard_data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  cardData = admin_card_data;
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;
  tableData = table_data;

  editingIndex: number | null = null;
  editedUser: { crime: string; location: string; date: string; resolution: string } = { crime: '', location: '', date: '', resolution: '' };

  
  crime: string = '';
  location: string = '';
  date: string = '';
  resolution: string = 'Unresolved';
  resolutions: string[] = ['Resolved', 'Unresolved', 'In Progress', 'Closed'];
  users: { crime: string; location: string; date: string, resolution: string }[] = [];

  addCrime() {
    if (this.crime && this.location && this.date && this.resolution) {
      this.users.push({ crime: this.crime,
         location: this.location, 
         date: this.date, 
          resolution: this.resolution
        });
      this.crime = '';
      this.location = '';
      this.date = ''; 
      this.resolution = 'Unresolved';
    
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
  
  deleteCrime(index: number) {
    this.users.splice(index, 1);

    localStorage.setItem('userManagementData', JSON.stringify(this.users));
  }
  ngOnInit() {
    const storedData = localStorage.getItem('userManagementData');
    if (storedData) {
      this.users = JSON.parse(storedData);
    }
  }
}
