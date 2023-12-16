import { Component } from '@angular/core';
import { DataService } from 'src/app/components/data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent {
  crime: string = '';
  crimes: string[] = ['Theft', 'Assault', 'Rape', 'Drug Abuse', 'Possession of Firearms'];
  location: string = '';
  locations: { name: string, coordinates: { latitude: number, longitude: number }[] }[] = [
    {
      name: 'Cabanatuan City Central Transport Terminal',
      coordinates: [
        { latitude: 120.967257, longitude: 15.467763 },
        { latitude: 120.970041, longitude: 15.491498},
        { latitude: 120.970728, longitude: 15.470314},
        { latitude: 120.970167, longitude: 15.472716},
      
      ]
    },
    {
      name: 'Freedom Park',
      coordinates: [
        { latitude: 120.967705, longitude: 15.490637 },
        { latitude: 120.970041, longitude: 15.491498},
        { latitude: 120.970339, longitude: 15.490846},
        { latitude: 120.968056, longitude: 15.489950},
      
      ]
    },
    {
      name: 'Wesleyan University-Philippines',
      coordinates: [
        { latitude: 120.975135, longitude: 15.485014 },
        { latitude: 120.976167, longitude: 15.485360},
        { latitude: 120.976531, longitude: 15.482105},
        { latitude: 120.977081, longitude: 15.482291},
      
      ]
    },
    {
      name: 'Kapitan Pepe',
      coordinates: [
        { latitude: 120.957120, longitude: 15.485974 },
        { latitude: 120.958869, longitude: 15.483456},
        { latitude: 120.950072, longitude: 15.482960},
        { latitude: 120.948269, longitude: 15.477335},
        { latitude: 120.951423, longitude: 15.476115},
        { latitude: 120.953655, longitude: 15.480788},
      ]
    },
    {
      name: 'Nabao',
      coordinates: [
        { latitude: 120.963661, longitude: 15.490571 },
        { latitude: 120.963924, longitude: 15.489801},
        { latitude: 120.964310 , longitude: 15.489868},
        { latitude: 120.964492, longitude: 15.489496},
        { latitude: 120.966686, longitude: 15.490297},
        { latitude: 120.966182, longitude: 15.491269},
      ]
    },
    {
      name: 'Vijandre',
      coordinates: [
        { latitude: 120.957224, longitude: 15.487126 },
        { latitude: 120.957753, longitude: 15.486146},
        { latitude: 120.957334, longitude: 15.485937},
        { latitude: 120.957909, longitude: 15.484952},
        { latitude: 120.959030, longitude: 15.483649},
        { latitude: 120.960259, longitude: 15.484135},
        { latitude: 120.958773, longitude: 15.487857},
      ]
    },
    {
      name: 'Zulueta',
      coordinates: [
        { latitude: 120.952504, longitude: 15.478445},
        { latitude: 120.957966, longitude: 15.475989},
        { latitude: 120.960126, longitude: 15.484073},
        { latitude: 120.953646, longitude: 15.480806},
    
      ]
    },
    {
      name: 'Bantug Bulalo',
      coordinates: [
        { latitude:120.981356, longitude: 15.488335},
        { latitude: 120.982504, longitude:15.489122},
        { latitude: 120.978034, longitude: 15.491824},
        { latitude: 120.977283, longitude: 15.491266},
        { latitude:120.975459, longitude: 15.491576},
        { latitude:120.975201, longitude: 15.489715},
      ]
    },
    {
      name: 'Bangad',
      coordinates: [
        { latitude:121.014157, longitude: 15.504023},
        { latitude:121.021453, longitude:15.489548},
        { latitude: 121.040937, longitude:15.498068},
        { latitude: 121.037232, longitude: 15.513956},
        
      ]
    },
    {
      name: 'Lagare',
      coordinates: [
        { latitude:121.014230, longitude: 15.522498},
        { latitude:121.013972, longitude:15.521009},
        { latitude: 120.997665, longitude:15.518032},
        { latitude: 121.002600 , longitude: 15.506412},
        
      ]
    },
    {
      name: 'Caalibangbangan',
      coordinates: [
        { latitude:120.940812, longitude: 15.535618},
        { latitude:120.933345, longitude:15.507417},
        { latitude: 120.944374 , longitude:15.533385},
        { latitude: 121.002600 , longitude: 15.506412},
        
      ]
    },
    ]
  date: string = '';
  status: string = '';
  report: string = '';
  resolutions: string[] = ['Unresolved', 'Resolved', 'In Progress', 'Closed'];
  id: number;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private crimeService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']; // Assuming your route parameter is named 'id'
      this.loadCrimeData();
    });
  }

  loadCrimeData() {
    // Fetch crime data using the id
    this.crimeService.getCrimeById(this.id).subscribe((data: any) => {
      this.crime = data.crime;
      this.location = data.location;
      this.date = data.date;
      this.status = data.status;
      this.report = data.report;
      // You may need to set other properties based on your data structure
    });
  }
  
  updateCrime() {
    const crimeData = {
      crime: this.crime,
      location: this.location,
      date: this.date,
      status: this.status,
      report: this.report,
    };

    const apiUrl = `http://localhost:3000/update/crime/${this.id}`;

    this.httpClient.put(apiUrl, crimeData).subscribe(
      (response) => {
        console.log('Crime Updated:', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error updating crime:', error);
      }
    );
  }

  resetForm() {
    this.crime = '';
    this.location = '';
    this.date = '';
    this.status = '';
    this.report = '';
  }
}
