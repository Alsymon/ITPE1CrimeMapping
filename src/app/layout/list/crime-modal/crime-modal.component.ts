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
  locations: { name: string, coordinates: { latitude: number, longitude: number }[] }[] = [
    {
      name: 'Freedom Park',
      coordinates: [
        { latitude: 120.944459, longitude: 15.467342 },
        { latitude: 120.947858, longitude: 15.481119},
        { latitude: 120.969646, longitude: 15.485096},
        { latitude: 120.983727, longitude: 15.471995},
        { latitude: 120.961271, longitude: 15.462519},
      ]
    },
    // Add similar entries for other locations
  ];
  date: string = '';
  status: string = 'Unresolved';
  report: string = '';
  resolutions: string[] = ['Unresolved', 'Resolved', 'In Progress', 'Closed'];
  users: { crime: string; location: string; date: string, status: string , report:string}[] = [];
  showAddCrimeForm: boolean = false;
  showAddCrimeButton: boolean = true;


  addCrime() {
    if (this.crime && this.location && this.date && this.status && this.report) {
      const selectedLocation = this.locations.find(loc => loc.name === this.location);
      if (selectedLocation) {
        const newCrime = {
          crime: this.crime,
          location: this.location,
          date: this.date,
          status: this.status,
          report: this.report,
          coordinates: selectedLocation.coordinates.map(coord => [coord.latitude, coord.longitude] as [number, number]),
        };
  
        // Set headers to specify content type as JSON
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
        this.httpClient.post('http://localhost:3000/crime-list/add-crime', newCrime, { headers })
          .subscribe({
            next: (response) => {
              console.log('Crime added successfully:', response);
  
              // Update your local data or perform any other actions
              this.users.push(newCrime);
  
              // Clear form fields
              this.crime = 'Theft';
              this.location = '';
              this.date = '';
              this.status = 'Unresolved';
              this.report = '';
            },
            error: (error) => {
              console.error('Error adding crime:', error);
            }
          });
      } else {
        console.error('Selected location not found:', this.location);
      }
    }
  }
  

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
