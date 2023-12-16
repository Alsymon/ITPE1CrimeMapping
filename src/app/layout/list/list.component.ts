  import { Component } from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { DataService } from 'src/app/components/data.service';
  import { CrimeModalComponent } from './crime-modal/crime-modal.component';
  import { UpdateModalComponent } from './update-modal/update-modal.component';

  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
  })
  export class ListComponent {
    crimeData: any[];
    constructor(private dialogRef: MatDialog, private httpClient: HttpClient, private dataService: DataService) {}
    
    
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
    users: { id: number; crime: string; location: string; date: string, status: string, report: string }[] = [];

    showAddCrimeForm: boolean = false;
    showAddCrimeButton: boolean = true;


    ngOnInit(): void {
      this.loadCrimes();
    }

    openDialog() {
      this.dialogRef.open(CrimeModalComponent);
    }

    updateModal() {
      this.dialogRef.open(UpdateModalComponent);
    }

    loadCrimes() {
      this.dataService.getAllCrimes().subscribe((data) => {
        this.crimeData = data;
      });
    }

    deleteCrime(crimeId: number) {
      // Set headers to specify content type as JSON
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.httpClient.delete(`http://localhost:3000/delete/crime/${crimeId}`, { headers })
        .subscribe({
          next: (response) => {
            console.log(`Crime ${crimeId} deleted successfully:`, response);
      
            // Update your local data or perform any other actions
            const index = this.users.findIndex((crime) => crime.id === crimeId);
            if (index !== -1) {
              this.users.splice(index, 1);
            }
            alert(`Crime ${crimeId} deleted successfully`);
          },
          error: (error) => {
            console.error(`Error deleting crime ${crimeId}:`, error);
            alert(`Error deleting crime ${crimeId}: ${error.message}`);
          }
        });
        
    }
  }