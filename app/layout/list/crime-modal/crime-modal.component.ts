import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crime-modal',
  templateUrl: './crime-modal.component.html',
  styleUrls: ['./crime-modal.component.scss']
})
export class CrimeModalComponent {

  
  constructor( private httpClient: HttpClient, private dialog: MatDialog) {}


  crime: string = 'Theft';
  crimes: string[] = ['Theft','Assault','Rape', 'Drug Abuse', 'Possession of Firearms'];
  location: string = '';
  date: string = '';
  status: string = 'Unresolved';
  report: string = '';
  resolutions: string[] = ['Resolved', 'Unresolved', 'In Progress', 'Closed'];
  users: { crime: string; location: string; date: string, status: string , report:string}[] = [];
  showAddCrimeForm: boolean = false;
  showAddCrimeButton: boolean = true;


  addCrime() {
    if (this.crime && this.location && this.date && this.status && this.report) {
      const newCrime = {
        crime: this.crime,
        location: this.location,
        date: this.date,
        status: this.status,
        report: this.report,
      };
  
      // Set headers to specify content type as JSON
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
      this.httpClient.post('http://localhost:3000/crime-list/add-crime', newCrime, { headers })
      .subscribe({
        next: (response) => {
          console.log('Crime added successfully:', response);

          this.dialog.closeAll();

          // Update your local data or perform any other actions
          this.users.push(newCrime);
      
          // Clear form fields
          this.crime = '';
          this.location = '';
          this.date = '';
          this.status = 'Unresolved';
          this.report = '';
        },
        error: (error) => {
          console.error('Error adding crime:', error);
        }
      });}}

  toggleAddCrimeForm() {
    this.showAddCrimeForm = !this.showAddCrimeForm;
    this.showAddCrimeButton = !this.showAddCrimeButton;
  }
  exitForm() {
    this.showAddCrimeForm = false;
    this.showAddCrimeButton = true;
  }
  ngOnInit() {
    const storedData = localStorage.getItem('userManagementData');
    if (storedData) {
      this.users = JSON.parse(storedData);
    }
  }

}
