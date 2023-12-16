import { Component, OnInit } from '@angular/core';
import { guest_card_data, topnav_data, guest_sidenav_data } from 'src/shared_data/dashboard_data';
import { DataService } from '../components/data.service';

@Component({
  selector: 'app-analytics-g',
  templateUrl: './analytics-g.component.html',
  styleUrls: ['./analytics-g.component.scss']
})
export class AnalyticsGComponent implements OnInit {
  cardData = guest_card_data;
  guest = topnav_data;
  sidenav = guest_sidenav_data;
  crimeData: any[] = [];

  constructor(private crimeService: DataService) { }

  ngOnInit(): void {
    this.loadCrimeData();
  }

  loadCrimeData() {
    this.crimeService.getAllCrimes().subscribe(
      (data) => {
        // Process data to calculate total count for each crime type
        this.crimeData = this.calculateTotalCount(data);
      },
      (error) => {
        console.error('Error fetching crime data:', error);
      }
    );
  }

  calculateTotalCount(data: any[]): any[] {
    const crimeCountMap = new Map<string, number>();

    // Count total crimes for each crime type
    data.forEach((crime) => {
      const crimeType = crime.crime;
      const count = crimeCountMap.get(crimeType) || 0;
      crimeCountMap.set(crimeType, count + 1);
    });

    // Convert map back to an array of objects
    const result: any[] = [];
    crimeCountMap.forEach((count, crimeType) => {
      result.push({ crimeType, totalCount: count });
    });

    return result;
  }
}