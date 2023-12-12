import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { admin_card_data, admin_topnav_data, admin_sidenav_data, table_data } from 'src/shared_data/dashboard_data';
import { CrimeModalComponent } from './crime-modal/crime-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from 'src/app/components/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  crimeData: any[];
  constructor(private dialogRef: MatDialog, private httpClient: HttpClient, private dataService: DataService) {}
  
  ngOnInit(): void {
    this.dataService.getAllCrimes().subscribe((data) => {
      this.crimeData = data;
    });
  }
  openDialog() {
    this.dialogRef.open(CrimeModalComponent)
  }
  
  cardData = admin_card_data;
  admin = admin_topnav_data;
  admin_sidenav = admin_sidenav_data;
  tableData = table_data;

  editingIndex: number | null = null;
  editedUser: { crime: string; location: string; date: string; resolution: string } = { crime: '', location: '', date: '', resolution: '' };
  showAddCrimeForm: boolean = false;
  showAddCrimeButton: boolean = true;
  
  crime: string = 'Theft';
  crimes: string[] = ['Theft','Assault','Rape', 'Drug Abuse', 'Possession of Firearms'];
  location: string = '';
  date: string = '';
  status: string = 'Unresolved';
  report: string = '';
  resolutions: string[] = ['Resolved', 'Unresolved', 'In Progress', 'Closed'];
  users: { crime: string; location: string; date: string, status: string , report:string}[] = [];

  

  toggleAddCrimeForm() {
    this.showAddCrimeForm = !this.showAddCrimeForm;
    this.showAddCrimeButton = !this.showAddCrimeButton;
  }
  exitForm() {
    this.showAddCrimeForm = false;
    this.showAddCrimeButton = true;
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
}