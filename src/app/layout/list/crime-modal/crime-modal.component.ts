import { Component } from '@angular/core';

@Component({
  selector: 'app-crime-modal',
  templateUrl: './crime-modal.component.html',
  styleUrls: ['./crime-modal.component.scss']
})
export class CrimeModalComponent {



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
      this.users.push({ crime: this.crime,
         location: this.location, 
         date: this.date, 
          status: this.status,
          report: this.report
        });
        

      this.crime = '';
      this.location = '';
      this.date = ''; 
      this.status= 'Unresolved';
      this.report= '';
    
      localStorage.setItem('userManagementData', JSON.stringify(this.users));

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
