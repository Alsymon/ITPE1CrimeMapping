
import { Component } from '@angular/core';
import { DataService } from 'src/app/components/data.service';
@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent {
  constructor(private crimeService: DataService) {}
  crime: string = 'Theft';
  crimes: string[] = ['Theft', 'Assault', 'Rape', 'Drug Abuse', 'Possession of Firearms'];
  location: string = '';
  locations: { name: string, coordinates: { latitude: number, longitude: number }[] }[] = [
    {
      name: 'Freedom Park',
      coordinates: [
        { latitude: 120.944459, longitude: 15.467342 },
        { latitude: 120.947858, longitude: 15.481119 },
        { latitude: 120.969646, longitude: 15.485096 },
        { latitude: 120.983727, longitude: 15.471995 },
        { latitude: 120.961271, longitude: 15.462519 },
      ]
    },
    // Add similar entries for other locations
  ];
  date: string = '';
  status: string = 'Unresolved';
  report: string = '';
  resolutions: string[] = ['Unresolved', 'Resolved', 'In Progress', 'Closed'];
  users: { id: number, crime: string, location: string, date: string, status: string, report: string }[] = [];
  crimeId: number;



}