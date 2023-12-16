import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { guest_card_data, topnav_data, guest_sidenav_data, table_data } from 'src/shared_data/dashboard_data';
import { DataService } from '../components/data.service';
import { CrimeModalComponent } from '../layout/list/crime-modal/crime-modal.component';
import { UpdateModalComponent } from '../layout/list/update-modal/update-modal.component';

@Component({
  selector: 'app-list-g',
  templateUrl: './list-g.component.html',
  styleUrls: ['./list-g.component.scss']
})
export class ListGComponent implements OnInit {
  crimeData: any[];
    constructor(private dialogRef: MatDialog, private httpClient: HttpClient, private dataService: DataService) {}
   
  cardData = guest_card_data;
  guest = topnav_data;
  sidenav = guest_sidenav_data;
  tableData = table_data;

  crime: string = '';
  location: string = '';
  date: string = '';
  status: string = 'Unresolved';
  resolutions: string[] = ['Resolved', 'Unresolved', 'In Progress', 'Closed'];
  report: string = '';
  users: { crime: string; location: string; date: string, status: string , report: string}[] = [];


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

}