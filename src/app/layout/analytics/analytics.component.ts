import { Component } from '@angular/core';
import { DataService } from 'src/app/components/data.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
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
